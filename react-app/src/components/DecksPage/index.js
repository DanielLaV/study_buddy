import './DecksPage.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import * as studyDeckActions from "../../store/decks_studying";
import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.js';
import AddDeckFormModal from '../AddDeckModal';

function DecksPage() {
    const decks = useSelector(state => Object.values(state.decks));
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();
    // console.log('DECKS', decks.decks)

    useEffect(() => {
        dispatch(deckActions.getDecks());
        dispatch(studyDeckActions.getStudyDecks(userId));
    }, [dispatch]);

    return (
        <div className='decksPage'>
            <AddDeckFormModal />
            {decks?.map(deck => <div key={deck.id}> <Deck deck={deck} /> </div>)}
        </div>
    )
}

export default DecksPage;
