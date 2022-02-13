import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteCardForm from './DeleteCardForm';
import '../Card/card.css'
import Trash from '../../assets/trash.png'

function DeleteCardFormModal({card}) {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = e => {
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <input type="image" className='trashCard' src={Trash} alt="text" onClick={onSubmit} to="#" ></input>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCardForm setShowModal={setShowModal} card={card}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCardFormModal;
