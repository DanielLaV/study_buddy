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
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user.id)
    const { deckId } = useParams();
    const deck = useSelector(state => state.decks[deckId])

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

        return (
            <div className='cardPageContainer'>
                <div key={deck.id} className='deckIdPage'>
                    <div className='deckNameContainer'>
                        <h1 className='deckName'>{deck.title}</h1>
                        <div className='tags-container'>
                            <Tags />
                        </div>
                        {isOwner &&
                            <div className='addCardOrTag'>
                                <AddCardFormModal />
                                <AddTagFormModal />
                            </div>}
                    </div>
                    <CardBrowser />
                    <h2>{deck.description}</h2>
                </div>
            </div>
        )
    }
    else return "DON'T LOOK AT ME! I'M HIDEOUS"
}

export default DeckIdPage;
