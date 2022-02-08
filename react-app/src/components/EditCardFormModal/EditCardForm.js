import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from "../../store/cards";

function EditCardForm({ payload }) {
  const setShowModal = payload
  const dispatch = useDispatch();
  // const currCard = useSelector(state => state.cards);
  const currCard = {
    front: "this is the front",
    back: "this is the back"
  }
  const [front, setFront] = useState(currCard.front);
  const [back, setBack] = useState(currCard.back);
  const [errors, setErrors] = useState([]);
  const deck_id = useSelector(state => state.decks.id);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    dispatch(cardActions.getOneCard(1))
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      front,
      back,
      deck_id: 1,
      cardId: 1
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
      <h2>
        {success}
      </h2>
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
