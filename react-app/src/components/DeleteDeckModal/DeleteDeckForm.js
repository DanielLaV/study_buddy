import React from "react";
import { useDispatch } from 'react-redux';
import * as deckActions from "../../store/decks";



function DeleteDeckForm({ payload, deck }) {
    const dispatch = useDispatch();
    const setShowModal = payload;

    const submitDelete = () => {
        dispatch(deckActions.deleteDeck(deck.id))
        setShowModal(false)
    }

    return (<><h2>Are you sure you want to delete this deck?</h2>
        <h3>This cannot be undone.</h3>
        <button type="button" onClick={(e) => submitDelete()} className="dark-button">Yes</button>
        <button type="button" onClick={(e) => setShowModal(false)} className="light-button">No</button>
    </>)
}

export default DeleteDeckForm
