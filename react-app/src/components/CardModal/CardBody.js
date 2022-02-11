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
        (<div className="buttons">
            <button
                type="button"
                onClick={(e) => setShowModal(false)} className="">
                Close
            </button>
        </div>)
    console.log("false?", user.id === deck.user_id)
    if (user.id === deck.user_id) {
        buttonDiv = [
            buttonDiv, <>
                <EditCardFormModal card={card} />
                <DeleteCardFormModal card={card} />
            </>
        ]
    }
    return (
        <div className="">
            <h2>Front:</h2>
            <h3>{card.front}</h3>
            <h2>Back:</h2>
            <p>{card.back}</p>
            {buttonDiv}
        </div>)
}

export default CardBody
