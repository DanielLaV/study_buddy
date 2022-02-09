import './DeckIdPage.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import { useDispatch, useSelector } from 'react-redux';
import Deck from '../DecksPage/Deck';
import { useParams } from 'react-router-dom';
import AddCardFormModal from '../AddCardFormModal';
import CardBrowser from '../CardsBrowser';

function DeckIdPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user.id)
    const { deckId } = useParams();
    const deck = useSelector(state => state.decks[deckId])

    useEffect(() => {
        dispatch(deckActions.getOneDeck(deckId));
    }, [dispatch]);

    if (deck) {
        const isOwner = user === deck.user_id;
        return (<>
            <div key={deck.id} className='deckIdPage'>
                <Deck deck={deck} />
                {isOwner && <AddCardFormModal />}
            </div>
            <CardBrowser />
        </>
        )
    }
    else return "DON'T LOOK AT ME! I'M HIDEOUS"
}

export default DeckIdPage;
