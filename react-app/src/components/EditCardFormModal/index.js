import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import EditCardForm from './EditCardForm';

function EditCardFormModal() {
  const [showModal, setShowModal] = useState(false);
  payload = {}

  return (
    <>
      <NavLink onClick={() => setShowModal(true)} to="#" className=''>Edit Card</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCardForm payload={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditCardFormModal;
