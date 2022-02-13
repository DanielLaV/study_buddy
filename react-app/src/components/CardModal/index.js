import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CardBody from './CardBody';
import Card from "../Card";
import './CardModal.css'

function CardBodyModal({card}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='eachCard' onClick={() => setShowModal(true)}><div className='texter'><Card card={card} /></div></div>
            {showModal && (
                <Modal className="cardP" onClose={() => setShowModal(false)}>
                    <CardBody setShowModal={setShowModal} cardId={card.id}/>
                </Modal>
            )}
        </>
    )
}

export default CardBodyModal;
