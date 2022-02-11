import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Card from "../Card";
import SearchCardBody from './SearchCardBody';

function SearchCardBodyModal({card}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='singleDeck' onClick={() => setShowModal(true)}><Card card={card} /></div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SearchCardBody setShowModal={setShowModal} cardId={card.id}/>
                </Modal>
            )}
        </>
    )
}

export default SearchCardBodyModal;
