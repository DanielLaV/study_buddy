import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditUserForm from './EditUserForm';



function EditUserModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <input type="image" name="<Name of the image button >" className='pencil'
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
