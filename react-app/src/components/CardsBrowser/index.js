import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cardActions from "../../store/cards"
import { useParams } from "react-router-dom";
import CardBodyModal from "../CardModal";
import Card from "./Card";

const CardBrowser = () => {
    const { deckId } = useParams();
    const userId = useSelector(state => state.session.user.id)
    const decks = useSelector(state => state.decks)
    const deck = decks[deckId]
    const isOwner = userId === deck.user_id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardActions.getDeckCards(deckId));
    }, [dispatch, deckId]);
    const cards = useSelector(state => {
        return Object.values(state.cards);
    });

    return (
        <div className=""><h2>Cards for {deck.title}</h2>
            <div>
                {cards.map((card) => {
                    return (
                        <div key={card.id}> <Card card={card} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardBrowser
