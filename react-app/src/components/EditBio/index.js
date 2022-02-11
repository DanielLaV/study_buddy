import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBioForm from './EditBioForm';

function EditBioFormModal({user}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
  
  <input type="image" name="<Name of the image button >" className='pencil'
                src="/pencil2.png" alt="text" onClick={() => setShowModal(true)}></input>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditBioForm setShowModal={setShowModal} user={user} />
                </Modal>
            )}
    </>
  );
}

export default EditBioFormModal;
