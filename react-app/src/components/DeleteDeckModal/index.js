import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteDeckForm from './DeleteDeckForm';
import './DeleteDeck.css'
import '../Card/card.css'

function DeleteDeckFormModal({ deck }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <input type="image" className='trashCard' src="/trash.png" alt="text" onClick={() => setShowModal(true)} to="#" ></input>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteDeckForm payload={setShowModal} deck={deck} />
        </Modal>
      )}
    </>
  );
}

export default DeleteDeckFormModal;
