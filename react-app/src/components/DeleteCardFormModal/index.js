import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import DeleteCardForm from './DeleteCardForm';

function DeleteCardFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink onClick={() => setShowModal(true)} to="#" className=''>Delete Card</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCardForm payload={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCardFormModal;
