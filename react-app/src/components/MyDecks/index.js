import './MyDecks.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import { useDispatch, useSelector } from 'react-redux';
import MyDecks from './MyDecks.js';
import { NavLink } from 'react-router-dom';

function MyDecksPage() {
    const decks = useSelector(state => Object.values(state.decks));
    const dispatch = useDispatch();
    // console.log('DECKS', decks.decks)

    useEffect(() => {
        dispatch(deckActions.getDecks());
    }, [dispatch]);

    return (
        <div className='decks'>
            {decks?.map(deck => <NavLink  className="Deck" to={`/decks/${deck.id}`} key={deck.id}> <MyDecks deck={deck} /> </NavLink>)}
        </div>
    )
}

export default MyDecksPage;
