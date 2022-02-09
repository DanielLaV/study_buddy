import React from 'react';
import { useDispatch } from 'react-redux';
import { removeStudyDeck } from '../../store/decks_studying';

function DeleteFromSLButton({deck_id, user_id}) {
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeStudyDeck(deck_id, user_id))
}
  return (
    <>
      <button className='delete-button' onClick={handleSubmit}>Remove</button>
    </>
  );
}

export default DeleteFromSLButton;
