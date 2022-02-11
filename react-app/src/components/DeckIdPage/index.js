import './DeckIdPage.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import * as tagActions from "../../store/tags";
import { useDispatch, useSelector } from 'react-redux';
import Deck from '../DecksPage/Deck';
import { useParams } from 'react-router-dom';
import AddCardFormModal from '../AddCardFormModal';
import CardBrowser from '../CardsBrowser';
import AddTagFormModal from '../AddTagsFormModal';
import Tags from '../Tags'


function DeckIdPage() {
    console.log("decksID page")
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user.id)
    const { deckId } = useParams();
    const deck = useSelector(state => state.decks[deckId])
    const allTags = useSelector(state => Object.values(state.tags))
    console.log("deckId", deckId, typeof(deckId))

    useEffect(() => {
        dispatch(deckActions.getOneDeck(deckId));
        dispatch(tagActions.getTags(deckId))
        return () => {
            dispatch(deckActions.getOneDeck(deckId));
            dispatch(tagActions.getTags(deckId))
        }
    }, [dispatch, deckId]);


    if (deck) {
        const isOwner = user === deck?.user_id;
        let displayTags = allTags.map(tag => <Tags tag={tag} isOwner={isOwner}/>)

        return (
        <>
            <div key={deck.id} className='deckIdPage'>
                <Deck deck={deck} />
                {isOwner &&
                    <>
                        <AddCardFormModal />
                        <AddTagFormModal />
                    </>}
            </div>
            <div className='tags-container'>{displayTags}
            </div>
            <CardBrowser />
        </>
        )
    }
    else return "DON'T LOOK AT ME! I'M HIDEOUS"
}

export default DeckIdPage;
