import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login(email, password))
      .then((response) => {
        if (response.errors) {
          console.log("response.errors", response.errors)
          setErrors(response.errors)
          return
        }
        else if (!response.errors) setShowModal(false);
      })
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-container'>

      <form className='form' onSubmit={onLogin}>
        <div>
          <div className="error-list">{errors[0]}</div>
        </div>
        <div className='loginForm'>
          <h1>Log In</h1>
          <label htmlFor='email'> </label>
          <input
          placeholder='Email'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
            className='input'
          />
        </div>
        <div className='loginForm'>
          <label htmlFor='password'></label>
          <input
          placeholder='Password'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            className='input'
          />
        </div>
        <button className='form-button' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
