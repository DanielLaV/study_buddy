import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from "../../store/cards";

function DeleteCardForm({ payload }) {
    const setShowModal = payload;
    const currCard = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const currUserId = useSelector(state => state.session.user.id);
    const currDeckId = useSelector(state => state.decks.user_id); // need to change this depending on how data is presented in the store
    const deckId = useSelector(state => state.decks.id);
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState([]);
    // const cardId = state.cards.id
    const submitDelete = (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
            deck_id: deckId,
            curr_user_id: currUserId,
            deck_user_id: currDeckId
        }
        return dispatch(cardActions.deleteCard(payload))
            .then(
                () => {
                    setSuccess("Success!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                }, async (response) => {
                    const data = await response.json();
                    if (data && data.errors) setErrors(data.errors);
                }
            );
    };

    return (<><h2>Are you sure you want to delete this image?</h2>
        <h3>This cannot be undone.</h3>
        <form onSubmit={submitDelete}>
            <input
                type="hidden"
                id="deck_id"
                // value={deck_id} get this from the store
                value={1}
            />
            <input
                type="hidden"
                id="curr_user_id"
                // value={session user id} get this from the store
                value={1}
            />
            <input
                type="hidden"
                id="deck_user_id"
                // value={deck user id} get this from the store
                value={1}
            />
            <button type="submit" className="dark-button">Yes</button>
            <button type="button" onClick={(e) => setShowModal(false)} className="light-button">No</button>
        </form>
        <h2>{success}</h2>
    </>)
}

export default DeleteCardForm
