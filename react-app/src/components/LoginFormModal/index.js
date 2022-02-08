import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { login } from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const demoLogin = () => {
    const email = 'demo@aa.io';
    const password = 'password';
    return dispatch(login(email, password));
  }

  return (
      <>
      {/* <button className='demoButton' onClick={demoLogin}>Demo User</button> */}
      <button className='navButton' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
          <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
