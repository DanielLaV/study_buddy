import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCardForm from './EditCardForm';
import '../Card/card.css'

function EditCardFormModal({card}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <input type="image" name="<Name of the image button >" className='pencil'
                src="/pencil2.png" alt="text" onClick={() => setShowModal(true)}></input>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCardForm setShowModal={setShowModal} card={card}/>
        </Modal>
      )}
    </>
  );
}

export default EditCardFormModal;
