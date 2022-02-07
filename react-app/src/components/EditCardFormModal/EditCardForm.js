import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from "../../store/cards";

function EditCardForm({ payload }) {
  const { setShowModal } = payload
  const [front, setFront] = useState(currCard.front);
  const [back, setBack] = useState(currCard.back);
  const [errors, setErrors] = useState([]);
  const deck_id = useSelector(state => state.decks.id);
  const currCard = useSelector(state => state.cards);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return <h1>hello!</h1>
  };

  return (
    <div className="card-form">
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx} className="errors">{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="">
        <textarea
          id="front"
          type="text"
          value={front}
          onChange={(e) => setFront(e.target.value)}
          required
          placeholder="Enter what you want to appear on the front of the card. The front can be something like a question, concept, or vocabulary word."
          className=""
        />
        <textarea
          id="back"
          type="text"
          value={back}
          onChange={(e) => setBack(e.target.value)}
          required
          placeholder="Enter what you want to appear on the back of the card. This would be the answer or response to the prompt on the front of the card."
          className=""
        />
        <input
          type="hidden"
          value={deck_id}
        />
        <button
          type="submit"
          className="">
          Add Card!
        </button>
        <button
          type="button"
          className=""
          onClick={(e) => {
            setShowModal(false);
            setFront(currCard.front);
            setBack(currCard.back);
          }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditCardForm;
