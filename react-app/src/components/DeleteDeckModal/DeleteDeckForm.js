import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from "../../store/decks";
import { useHistory, useParams } from 'react-router-dom';




function DeleteDeckForm({ payload, deck }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const setShowModal = payload;
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const currUserId = useSelector(state => state.session.user.id);
    const { deckId } = useParams();
    const currUserDeckId = useSelector(state => state.decks[deckId].user_id);



    const submitDelete = (e) => {
        setErrors([]);
        const confirm = {
            deck_id: deckId,
            curr_user_id: currUserId,
            deck_user_id: currUserDeckId
        }

        return dispatch(deckActions.deleteDeck(confirm))
            .then(
                response => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                    history.push('/decks')
                }
            )
    }

    return (<><h2>Are you sure you want to delete this deck?</h2>
        <h3>This cannot be undone.</h3>
        <button type="button" onClick={(e) => submitDelete()} className="dark-button">Yes</button>
        <button type="button" onClick={(e) => setShowModal(false)} className="light-button">No</button>
        <h2>{success}</h2>
    </>)
}

export default DeleteDeckForm
