import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteCardForm from './DeleteCardForm';

function DeleteCardFormModal({card}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className=''>Delete Card</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCardForm setShowModal={setShowModal} card={card}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCardFormModal;
