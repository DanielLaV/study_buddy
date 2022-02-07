import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import AddCardForm from './AddCardForm';

function DeleteCardFormModal() {
  const [showModal, setShowModal] = useState(false);
  payload = {}

  return (
    <>
      <NavLink onClick={() => setShowModal(true)} to="#" className=''>Delete Card</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCardForm payload={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCardFormModal;
