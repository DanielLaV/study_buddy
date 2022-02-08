import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDeckForm from './EditDeckForm';
import './EditDeckForm.css';



function EditDeckFormModal() {
    const [showModal, setShowModal] = useState(false);

// Need to pass the current deck into the EditDeckForm
    return (
        <>
            <button className='editDeckButton' onClick={() => setShowModal(true)}>Edit Deck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditDeckForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default EditDeckFormModal;
