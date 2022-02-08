import './DeckId.css';
// import { useEffect } from 'react';
// import * as deckActions from "../../store/decks";
// import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.js';
import EditDeckFormModal from '../EditDeckModal';
// import AddDeckFormModal from '../AddDeckModal';

function DeckIdPage(deck) {

    // const dispatch = useDispatch();
    // console.log('DECKS', decks.decks)

    // useEffect(() => {
    //     dispatch(deckActions.getDecks());
    // }, [dispatch]);

    return (
        <div key={deck.id} className='deckIdPage'>
            <Deck deck={deck} />
            <EditDeckFormModal deck={deck}/>
        </div>
    )
}

export default DeckIdPage;
