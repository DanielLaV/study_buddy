import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCardForm from './AddCardForm';

function AddCardFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='addCardButton'>Add Card</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCardForm payload={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddCardFormModal;
