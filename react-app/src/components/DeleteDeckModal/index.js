import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteDeckForm from './DeleteDeckForm';
import '../Card/card.css'
import Trash from '../../assets/trash.png'

function DeleteDeckFormModal({ deck }) {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <input type="image" className='trashCard' src={Trash} alt="text" onClick={onSubmit} to="#" ></input>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteDeckForm payload={setShowModal} deck={deck} />
        </Modal>
      )}
    </>
  );
}

export default DeleteDeckFormModal;
