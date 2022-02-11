import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CardBody from './CardBody';
import Card from "../Card";
import * as deckActions from "../../store/decks";

function CardBodyModal({card}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='singleDeck' onClick={() => setShowModal(true)}><Card card={card} /></div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CardBody setShowModal={setShowModal} cardId={card.id}/>
                </Modal>
            )}
        </>
    )
}

export default CardBodyModal;
