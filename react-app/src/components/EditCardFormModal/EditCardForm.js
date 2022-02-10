import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as cardActions from "../../store/cards";

function EditCardForm({ setShowModal, card }) {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const [front, setFront] = useState(card.front);
  const [back, setBack] = useState(card.back);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    dispatch(cardActions.getOneCard(card.id))
  }, [dispatch, card.id])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      front,
      back,
      deck_id: +deckId,
      cardId: card.id
    }
    return dispatch(cardActions.editCard(payload))
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
    <div className="card-form">
      <h2>
        {success}
      </h2>
      <h2>Preview</h2>
      <h3>Front:</h3>
      <div>{front}</div>
      <h3>Back:</h3>
      <div>{back}</div>
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
        <button
          type="submit"
          className="">
          Submit Edits!
        </button>
        <button
          type="button"
          className=""
          onClick={(e) => {
            setShowModal(false);
            setFront(card.front);
            setBack(card.back);
          }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditCardForm;
