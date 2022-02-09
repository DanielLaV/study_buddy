import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cardActions from "../../store/cards"
import { useParams } from "react-router-dom";
// import CardBodyModal from "../CardModal";
import Card from "./Card";

const CardBrowser = () => {
    const dispatch = useDispatch();
    // const deck = useSelector(state => state.decks)
    const deckId = 1
    // const {deckId} = useParams();
    useEffect(() => {
        dispatch(cardActions.getDeckCards(deckId));
    }, [dispatch, deckId]);
    const cards = useSelector(state => {
        return Object.values(state.cards);
    });

    return (
        <div className=""><h2>Cards for dummy title</h2>
            <div>
                {cards.map((card) => {
                    return (
                        <div key={card.id}> <Card card={card} /></div>
                    )
                })}
            </div>
        </div>
        // <div className=""><h2>Cards for dummy title</h2>
        //     <div className="">
        //         hello from inside the card component
        //     </div>
        // </div>
    )
}

export default CardBrowser


// const response = await fetch('/api/decks/1/cards/')
// const data = await response.json()
