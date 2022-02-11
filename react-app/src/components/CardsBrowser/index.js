import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cardActions from "../../store/cards"
import { useParams } from "react-router-dom";
import CardBodyModal from "../CardModal";
import Card from "../Card";

const CardBrowser = () => {
    const { deckId } = useParams();
    const userId = useSelector(state => state.session.user.id)
    const deck = useSelector(state => state.decks[deckId])
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
                        <CardBodyModal card={card} key={card.id} />
                    )
                })}
            </div>
        </div>

    )
}

export default CardBrowser
