import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteFromSLForm';

function DeleteModal({deck_id, user_id}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-button' onClick={() => setShowModal(true)}>Remove From Study List</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm deck_id={deck_id} user_id={user_id} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteModal;
