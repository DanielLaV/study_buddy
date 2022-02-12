import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddTagForm from './AddTagForm';
import './AddTagForm.css';



function AddTagFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='addTagButton' onClick={() => setShowModal(true)}>Add Tag</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddTagForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default AddTagFormModal;
