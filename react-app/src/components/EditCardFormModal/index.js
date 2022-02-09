import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCardForm from './EditCardForm';

function EditCardFormModal({card}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className=''>Edit Card</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCardForm setShowModal={setShowModal} card={card}/>
        </Modal>
      )}
    </>
  );
}

export default EditCardFormModal;
