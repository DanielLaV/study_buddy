import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
    <div className='formView'>
    <div className="preview">

    <div className="form-container">
      <h2 style={{color:"green"}}>
        {success}
      </h2>
      <h2 className="preview-title">Preview</h2>
        <p className="side">Front:</p>
        <div>

        <div className="preview-text"><div className="texter">{front}</div></div>
        </div>
        <p className="side">Back:</p>
        <div>

        <div className="preview-text"><div className="texter">{back}</div></div>
        </div>
      </div>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx} className="errors">{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="form">
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
            Submit
          </button>
          <button
            type="button"
            className="form-button"
            onClick={(e) => {
              setShowModal(false);
              setFront(card.front);
              setBack(card.back);
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>

  );
}

export default EditCardForm;
