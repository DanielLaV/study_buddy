import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditUserForm from './EditUserForm';
import '../Card/card.css'

function EditUserModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <input type="image" name="<Name of the image button >" className='pencilBio'
                src="/pencil2.png" alt="text" onClick={() => setShowModal(true)}></input>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditUserForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default EditUserModal;
