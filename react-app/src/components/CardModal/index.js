import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CardBody from './CardBody';
import Card from "./Card";


function CardBodyModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='addDeckButton' onClick={() => setShowModal(true)}>Add new Deck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CardBody setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default CardBodyModal;
