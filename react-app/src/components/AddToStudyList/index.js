import { addOneStudyDeck } from "../../store/decks_studying";
import React from 'react';
import { useDispatch } from 'react-redux';
import './AddToStudyList.css'

function AddToStudyList({deck_id, user_id}) {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addOneStudyDeck(deck_id, user_id))
    }

    return (
    <>
        <button onClick={handleSubmit} className="add-to-study-list">+ Study List</button>

        


    </>
    )
}

export default AddToStudyList
