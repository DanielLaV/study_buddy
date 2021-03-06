import React from 'react';
import { useSelector } from "react-redux";
import "./HomePage.css"
import Splash from '../Splash'
import AddDeckModal from '../AddDeckModal/';
import MyDecksPage from '../MyDecks';
import StudyList from '../StudyList';
import EditUserModal from '../EditUserModal'
import Avatar from '../../assets/avatar.png'



function HomePage() {

  const user = useSelector((state) => state.session.user);

  if (user) {

    return (
      <div className="homePageContainer">
        <div className="user">
          <p className="userName">{user.username}</p>
          <img className="avatar" src={Avatar} alt="Avatar" />
          <div><EditUserModal /></div>
        </div>
        <div className="Decks">
          <div className="decksTitleContainer">
            <h1 className="myDecksTitle">My Decks</h1>
          </div>
          <div className='decksDisplay'>
            <MyDecksPage />
          </div>
          <div className='addDeckButtonContainer'>
            <AddDeckModal />
          </div>
        </div>
        <StudyList />
      </div>

    )
  }

  else {
    return (
      <Splash></Splash>
    )
  }
}





export default HomePage;
