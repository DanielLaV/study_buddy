import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css"
import Logo from './logo.png'
import LogoText from '../Splash/studyBuddyFont2.png'
import { useState } from 'react';


const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  // const userId = useSelector(state => state.session.user.id)

  const [page, setPage] = useState('home');



  let sessionLinks;

  if (user && window.location.pathname === "/") {
    sessionLinks = (
      <div className="navLinkContainer">
        {/* <NavLink to='' className='userLink'> {user.username}</NavLink> */}
        <NavLink onClick={() => setPage('decks')} to='/decks' className='navLink'>Browse Decks</NavLink>
        <NavLink onClick={() => setPage('study decks')} to={`user-study-decks/${user.id}`} className='navLink'>Study List</NavLink>
        <NavLink onClick={() => setPage('search')} to='' className='navLink'>Search...</NavLink>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/decks") {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink onClick={() => setPage('home')} to='' className='userLink'>{user.username}</NavLink>
        <NavLink onClick={() => setPage('study decks')} to={`user-study-decks/${user.id}`} className='navLink'>Study List</NavLink>
        <NavLink onClick={() => setPage('search')} to='' className='navLink'>Search...</NavLink>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === `/user-study-decks/${user.id}`) {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink onClick={() => setPage('home')} to='' className='userLink'>{user.username}</NavLink>
        <NavLink onClick={() => setPage('decks')} to='/decks' className='navLink'>Browse Decks</NavLink>
        <NavLink onClick={() => setPage('search')} to='' className='navLink'>Search...</NavLink>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/tags/:tagId") {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink onClick={() => setPage('home')} to='' className='userLink'>{user.username}</NavLink>
        <NavLink to={`user-study-decks/${user.id}`} className='navLink'>Study List</NavLink>
        <NavLink onClick={() => setPage('decks')} to='/decks' className='navLink'>Browse Decks</NavLink>
        <NavLink onClick={() => setPage('search')} to='' className='navLink'>Search...</NavLink>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/decks/:deckId") {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink onClick={() => setPage('home')} to='' className='userLink'>{user.username}</NavLink>
        <NavLink to={`user-study-decks/${user.id}`} className='navLink'>Study List</NavLink>
        <NavLink onClick={() => setPage('decks')} to='/decks' className='navLink'>Browse Decks</NavLink>
        <NavLink onClick={() => setPage('search')} to='' className='navLink'>Search...</NavLink>
        <LogoutButton />
      </div>

    );
  }

  else if (user && window.location.pathname === "/decks/:deckId/:cardId") {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink onClick={() => setPage('home')} to='' className='userLink'>{user.username}</NavLink>
        <NavLink to={`user-study-decks/${user.id}`} className='navLink'>Study List</NavLink>
        <NavLink onClick={() => setPage('decks')} to='/decks' className='navLink'>Browse Decks</NavLink>
        <NavLink onClick={() => setPage('search')} to='' className='navLink'>Search...</NavLink>
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
        <NavLink to='/'>
          <img id="navLogo" src={Logo} alt="logo"></img>
        </NavLink>
        <NavLink to='/'>
          <img id="navLogoText" src={LogoText} alt="logo"></img>
        </NavLink>
      </div>
      <div className="RightSideNav">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
