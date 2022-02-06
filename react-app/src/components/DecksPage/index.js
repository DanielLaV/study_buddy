import './DecksPage.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.js';

function DecksPage() {
    let decks = useSelector(state => state.decks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deckActions.getDecks());
    }, [dispatch]);

    return (
        <div className='decksPage'>
            {decks?.decks?.map(deck => <div key={deck.id}> <Deck deck={deck} /> </div>)}
        </div>
    )
}

export default DecksPage;
