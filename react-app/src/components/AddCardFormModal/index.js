import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import AddCardForm from './AddCardForm';

function AddCardFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink onClick={() => setShowModal(true)} to="#" className=''>Add Card</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCardForm payload={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddCardFormModal;
