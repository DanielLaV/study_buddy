import React, { useEffect } from "react";
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

    useEffect(() => {
        dispatch(cardActions.getOneCard(cardId));
    }, [dispatch, cardId])

    const modals = (<><EditCardFormModal card={card} />
        <DeleteCardFormModal card={card} /></>)

    const buttonDiv =
        (<div className="buttons">
            <button
                type="button"
                onClick={(e) => setShowModal(false)} className="form-button">
                Close
            </button>
            {(user.id === deck.user_id) && modals}
        </div>)

    return (
        <div className="preview">
            <div className="form-container">
                <p className="side">Front:</p>
                <div>
                    <div className="preview-text"><div className="texter">{card.front}</div></div>
                </div>
                <p className="side">Back:</p>
                <div>
                    <div className="preview-text"><div className="texter">{card.back}</div></div>
                </div>
            </div>
            <div className="form-button-container">
                {buttonDiv}
            </div>
        </div>)
}

export default CardBody
