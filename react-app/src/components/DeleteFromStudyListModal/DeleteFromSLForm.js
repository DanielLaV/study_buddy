import React from 'react';
import { useDispatch } from 'react-redux';
import { removeStudyDeck } from '../../store/decks_studying';
import './DeleteFromSLForm.css'

function DeleteForm({id, setShowModal}) {
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(removeStudyDeck(id))
        setShowModal(false)
    }

	return (
		<div className='delete-button-modal'>
			<h3>Are you sure you want to remove this deck from your Study List?</h3>
            <div className='delete-buttons-div'>
            <button className='delete-button-yes' onClick={handleSubmit}>Yes</button>
            <button className='delete-button-cancel'  onClick={(e) => setShowModal(false)}>Cancel</button>
            </div>
		</div>
	);
}

export default DeleteForm;
