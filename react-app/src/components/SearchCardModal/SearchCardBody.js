import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as cardActions from "../../store/cards"
import EditCardFormModal from "../EditCardFormModal";
import DeleteCardFormModal from "../DeleteCardFormModal";
import { useHistory } from "react-router-dom";

const SearchCardBody = ({ setShowModal, cardId }) => {
    const history = useHistory();
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user)
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
            <h2>Front:</h2>
            <h3>{card.front}</h3>
            <h2>Back:</h2>
            <h3>{card.back}</h3>
            {buttonDiv}
        </div>)
}

export default SearchCardBody
