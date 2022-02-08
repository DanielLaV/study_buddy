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
    const credential = 'demo@aa.io';
    const password = 'password';
    const user = { credential, password };
    return dispatch(login(user));
  }

  return (
      <>
      <button className='loginButton' onClick={demoLogin}>Demo User</button>
      <button className='loginButton' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
          <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
