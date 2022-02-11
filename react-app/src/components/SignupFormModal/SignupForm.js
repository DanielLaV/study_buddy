import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignupForm.css';

const SignupForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
    setShowModal(false);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            className='input'
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            className='input'
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            className='input'
          ></input>
        </div>
        <div>
          <label>Repeat Password:</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='input'
          ></input>
        </div>
        <div className='form-button-container'>
          <button className='form-button' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
