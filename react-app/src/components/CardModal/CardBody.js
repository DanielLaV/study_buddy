import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as cardActions from "../../store/cards"
import EditCardFormModal from "../EditCardFormModal";
import DeleteCardFormModal from "../DeleteCardFormModal";

const CardBody = ({ setShowModal, cardId }) => {
    const { deckId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const card = useSelector(state => state.cards[cardId]);
    const deck = useSelector(state => state.decks[deckId]);
    console.log("deck", deck)
    useEffect(() => {
        dispatch(cardActions.getOneCard(cardId));
    }, [dispatch, cardId])

    let buttonDiv =
        (<div>
            <button
                className="form-button"
                type="button"
                onClick={(e) => setShowModal(false)}>
                Close
            </button>
            {(user.id === deck.user_id) && modals}
        </div>)
    return (
        <div className="cardView">
            <h1>Front:</h1>
            <h3 style={{color:"black"}}>{card.front}</h3>
            <h1>Back:</h1>
            <h3 style={{color:"black"}}>{card.back}</h3>
            {buttonDiv}
        </div>)
}

export default CardBody
