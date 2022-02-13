import './MyDecks.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import { useDispatch, useSelector } from 'react-redux';
import MyDecks from './MyDecks.js';
import { NavLink } from 'react-router-dom';

function MyDecksPage() {
    const decks = useSelector(state => Object.values(state.decks));
    const userId = useSelector((state) => state.session.user.id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deckActions.getDecks());
    }, [dispatch]);

    let myDecks = decks.filter(deck => {
        return deck.user_id === userId;
    })

    return (
        <div className='decks'>
            {myDecks?.map(deck => <NavLink className="Deck" to={`/decks/${deck.id}`} key={deck.id}> <MyDecks deck={deck} /> </NavLink>)}
        </div>
    )
}

export default MyDecksPage;
