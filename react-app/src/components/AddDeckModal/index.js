import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddDeckForm from './AddDeckForm';
import './AddDeckForm.css';



function AddDeckFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='addDeckButton' onClick={() => setShowModal(true)}>Add Deck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddDeckForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default AddDeckFormModal;
