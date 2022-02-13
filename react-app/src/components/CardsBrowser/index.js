import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cardActions from "../../store/cards"
import { useParams } from "react-router-dom";
import CardBodyModal from "../CardModal";
import './CardsBrowser.css'

const CardBrowser = () => {
    const { deckId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardActions.getDeckCards(deckId));
    }, [dispatch, deckId]);
    const cards = useSelector(state => {
        return Object.values(state.cards);
    });

    return (
        <div className="cardDisplay">
            <div className="allCards">
                {cards.map((card) => {
                    return (
                        <CardBodyModal card={card} key={card?.id} />
                    )
                })}
            </div>
        </div>

    )
}

export default CardBrowser
