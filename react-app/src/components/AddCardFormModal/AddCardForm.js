import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cardActions from "../../store/cards";

function AddCardForm({ payload }) {
  const dispatch = useDispatch();
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
      deck_id: 1
    }
    return dispatch(cardActions.createCard(payload))
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
          id="deck_id"
          // value={deck_id} grab from store
          value={1}
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
            setFront("");
            setBack("");
          }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddCardForm;
