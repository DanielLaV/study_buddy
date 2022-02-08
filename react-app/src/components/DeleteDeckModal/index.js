import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteDeckForm from './DeleteDeckForm';

function DeleteDeckFormModal({ deck }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} to="#" className=''>Delete Deck</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteDeckForm payload={setShowModal} deck={deck} />
        </Modal>
      )}
    </>
  );
}

export default DeleteDeckFormModal;
