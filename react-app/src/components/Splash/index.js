import React from 'react';
import { useDispatch } from "react-redux";
import { login } from '../../store/session';

import "./Splash.css";
import logoFont from './studyBuddyFont2.png';
import backgroundImage from './splashBackground.jpg';


const Splash = () => {
  let sessionLinks;

  const dispatch = useDispatch();

  const demoLogin = () => {
    const email = 'demo@aa.io';
    const password = 'password';
    return dispatch(login(email, password));
  }

  sessionLinks = (
    <div className="splashBackgroundContainer">
      <div className='overlay'></div>
      <img className="splashBackgroundImage" src={backgroundImage} alt="logo"></img>

      <div className="splashBackgroundMiddle">
        <img className='logoFont' src={logoFont} alt="logo font"></img>
        <h2 className='splashSlogan'>ALWAYS HERE FOR YOU</h2>
        <button className='demoButton' onClick={demoLogin}>DEMO</button>
      </div>
    </div>
  );


  return (
    <div>
      {sessionLinks}
    </div>
  );
}

export default Splash;
