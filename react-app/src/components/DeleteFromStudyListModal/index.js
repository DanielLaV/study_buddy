import React from 'react';
import { useDispatch } from 'react-redux';
import { removeStudyDeck } from '../../store/decks_studying';
import './DeleteFromSLForm.css'

function DeleteFromSLButton({deck_id, user_id}) {
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeStudyDeck(deck_id, user_id))
}
  return (
    <>
      <button className='delete-button' onClick={handleSubmit}>- Study List</button>
    </>
  );
}

export default DeleteFromSLButton;
