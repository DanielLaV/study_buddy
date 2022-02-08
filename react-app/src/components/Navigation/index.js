import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css"
import Logo from './logo.png'

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;

  if (user && window.location.pathname === "/") {
    sessionLinks = (
      <div>
        <button className='navButton'>Browse Decks</button>
        <button className='navButton'>Study List</button>
        <button className='navButton'>Search...</button>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/decks") {
    sessionLinks = (
      <div>
        <button className='navButton'>"Username"</button>
        <button className='navButton'>Study List</button>
        <button className='navButton'>Search...</button>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/user-study-deck/:userId") {
    sessionLinks = (
      <div>
        <button className='navButton'>"Username"</button>
        <button className='navButton'>Browse Decks</button>
        <button className='navButton'>Search...</button>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/tags/:tagId") {
    sessionLinks = (
      <div>
        <button className='navButton'>"Username"</button>
        <button className='navButton'>Study List</button>
        <button className='navButton'>Browse Decks</button>
        <button className='navButton'>Search...</button>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/decks/:deckId") {
    sessionLinks = (
      <div>
        <button className='navButton'>"Username"</button>
        <button className='navButton'>Study List</button>
        <button className='navButton'>Browse Decks</button>
        <button className='navButton'>Search...</button>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/decks/:deckId/:cardId") {
    sessionLinks = (
      <div>
        <button className='navButton'>"Username"</button>
        <button className='navButton'>Study List</button>
        <button className='navButton'>Browse Decks</button>
        <button className='navButton'>Search...</button>
        <LogoutButton />
      </div>

    );
  }


  else {
    sessionLinks = (
      <ul className="unauthNavLinks">
        <li>
          <LoginFormModal to='/login' exact={true} activeClassName='active'>
          </LoginFormModal>
        </li>
        <li>
          <SignupFormModal to='/sign-up' exact={true} activeClassName='active'>
          </SignupFormModal>
        </li>
      </ul>
    );
  }




  return (
    <nav className="NavigationBar">
      <div>
        <img id="navLogo" src={Logo} alt="logo"></img>
      </div>
      <div className="RightSideNav">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
