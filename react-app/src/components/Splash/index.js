import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/session';

import "./Splash.css"
import logoFont from './studyBuddyFont2.png'
import backgroundImage from './splashBackground.jpg'


const Splash = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;

  const dispatch = useDispatch();

  const demoLogin = () => {
    const email = 'demo@aa.io';
    const password = 'password';
    return dispatch(login(email, password));
  }

  if (!user) {
    sessionLinks = (
      <div className="splashBackgroundContainer">
        <div className='overlay'></div>
        <img className="splashBackgroundImage" src={backgroundImage} alt="logo"></img>
        {/* <div className="splashBackgroundBlack"></div> */}
        <img className='logoFont' src={logoFont} ></img>
        <h2 className='splashSlogan'>ALWAYS HERE FOR YOU</h2>
        <button className='demoButton' onClick={demoLogin}>DEMO</button>



      </div>
    );
  }




  return (
    <div>
      {sessionLinks}
    </div>
  );
}

export default Splash;
