import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteCardForm from './DeleteCardForm';
import '../Card/card.css'

function DeleteCardFormModal({card}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <input type="image" className='trashCard' src="/trash.png" alt="text" onClick={() => setShowModal(true)} to="#" ></input>
      
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCardForm setShowModal={setShowModal} card={card}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCardFormModal;
