import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cardActions from "../../store/cards";
import { useParams } from "react-router-dom";
import './AddCardForm.css';

function AddCardForm({ payload }) {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const setShowModal = payload
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  // const deck_id = useSelector(state => state.decks.id)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      front,
      back,
      deck_id: +deckId
    }
    return dispatch(cardActions.createCard(payload))
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

  return (
    <div className="form-container">
      <h2>
        {success}
      </h2>
      <div className="preview">
        <h2 className="preview-title">Preview</h2>
        <h3>Front:</h3>
        <div className="preview-text">{front}</div>
        <h3>Back:</h3>
        <div className="preview-text">{back}</div>
      </div>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx} className="errors">{error}</li>
        ))}
      </ul>
      <form className='form' onSubmit={handleSubmit} className="">
        <div className="text-container">
          <textarea
            id="front"
            type="text"
            value={front}
            onChange={(e) => setFront(e.target.value)}
            required
            placeholder="Enter what you want to appear on the front of the card. The front can be something like a question, concept, or vocabulary word."
            className="input"
          />
          <textarea
            id="back"
            type="text"
            value={back}
            onChange={(e) => setBack(e.target.value)}
            required
            placeholder="Enter what you want to appear on the back of the card. This would be the answer or response to the prompt on the front of the card."
            className="input"
          />
        </div>
        <div className="form-button-container">
          <button
            type="submit"
            className="form-button">
            Add Card!
          </button>
          <button
            type="button"
            className="form-button"
            onClick={(e) => {
              setShowModal(false);
              setFront("");
              setBack("");
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCardForm;
