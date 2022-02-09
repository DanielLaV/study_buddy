import React from 'react';
import { useSelector } from "react-redux";
import "./HomePage.css"
import Splash from '../Splash'
import AddDeckModal from '../AddDeckModal/';



function HomePage() {

  const user = useSelector((state) => state.session.user);

  // let sessionLinks;

  if (user) {

    return (
      <div className="homePageContainer">
        <div className="user">
          <p className="userName">{user.username}</p>
          <p className='bio'>Harvard 2022. Pre-Law</p>
          {/* <h2 className='bio'>{user.bio}</h2> */}
        </div>
        <div className="Decks">
          <div className="decksTitleContainer">
            <h1 className="myDecksTitle">My Decks</h1>
          </div>
          <div className='decksDisplay'></div>
          <div className='addDeckButtonContainer'>
            <AddDeckModal />
          </div>

        </div>
        <div className="studyList">
          <div className="studyListTitleContainer">
            <h1 className="myStudyListTitle">Study List</h1>
          </div>
          <div className='studyListDisplay'></div>


        </div>

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
