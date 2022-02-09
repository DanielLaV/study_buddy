import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from "../../store/cards"

const CardBody = ({setShowModal, cardId}) => {
    console.log("cardId", cardId)
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const card = useSelector(state => state.cards[cardId]);
    useEffect(() => {
        dispatch(cardActions.getOneCard(cardId));
    }, [dispatch, cardId])
    return <h1>{card.front}</h1>
}

export default CardBody
