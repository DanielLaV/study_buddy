import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDeckForm from './EditDeckForm';
import './EditDeckForm.css';
import '../Card/card.css'



function EditDeckFormModal({ deck }) {
    const [showModal, setShowModal] = useState(false);

// Need to pass the current deck into the EditDeckForm
    return (
        <>
            {/* <button className='editDeckButton' onClick={() => setShowModal(true)}>Edit Deck</button> */}
            

            <input type="image" name="<Name of the image button >" className='pencil'
                src="/pencil2.png" alt="text" onClick={() => setShowModal(true)}></input>
                

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditDeckForm setShowModal={setShowModal} deck={deck} />
                </Modal>
            )}
        </>
    )
}

export default EditDeckFormModal;
