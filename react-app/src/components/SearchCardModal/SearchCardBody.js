import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchCardBody = ({ setShowModal, cardId }) => {
    const history = useHistory();
    const card = useSelector(state => state.search.cards[cardId]);
    const deckId = card?.deck_id

    const buttonDiv =
        (<div className="buttons">
            <button
                type="button"
                onClick={(e) => setShowModal(false)} className="">
                Close
            </button>
            <button
                type="button"
                onClick={(e) => history.push(`/decks/${deckId}`)} className="">
                Go to Deck
            </button>
        </div>)

    return (
        <div className="">
            <h2> Front:</h2>
            <h3>{card.front}</h3>
            <h2>Back:</h2>
            <h3>{card.back}</h3>
            {buttonDiv}
        </div>)
}

export default SearchCardBody
