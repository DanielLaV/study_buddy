import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditUserForm from './EditUserForm';
import '../Card/card.css'
import "../HomePage/HomePage.css"
import Splash from '../Splash'


import { useSelector } from "react-redux";


function EditUserModal() {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.session.user);


    if (user) {

    return (
        <>
            <p className='bio' onClick={() => setShowModal(true)}>{user.bio}</p>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditUserForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )}
    else {
        return (
          <Splash></Splash>
        )
      }

}

export default EditUserModal;
