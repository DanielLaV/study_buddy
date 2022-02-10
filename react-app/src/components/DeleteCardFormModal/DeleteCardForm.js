import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as cardActions from "../../store/cards";

function DeleteCardForm({ setShowModal, card }) {
    const dispatch = useDispatch();
    const { deckId } = useParams();
    const currUserId = useSelector(state => state.session.user.id);
    console.log(currUserId)
    const currUserDeckId = useSelector(state => state.decks[deckId].user_id);
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState([]);
    // const cardId = state.cards.id
    const submitDelete = (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
            deck_id: deckId,
            card_id: card.id,
            curr_user_id: currUserId,
            deck_user_id: currUserDeckId,
        }
        return dispatch(cardActions.deleteCard(payload))
            .then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                }
            );
    };

    return (<><h2>Are you sure you want to delete this card?</h2>
        <h3>This cannot be undone.</h3>
        <ul className="error-list">
            {errors.map((error, idx) => (
                <li key={idx} className="errors">{error}</li>
            ))}
        </ul>
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
