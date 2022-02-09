import React from 'react';
import { useSelector } from "react-redux";
import "./HomePage.css"
import Splash from '../Splash'



function HomePage() {

  const user = useSelector((state) => state.session.user);

  // let sessionLinks;

  if (user) {

    return (
      <div className="homePageContainer">
        <div className="user">
          <p className="userName">{user.username}</p>
          <h2 className='bio'>Harvard 2022</h2>
          <h2 className='bio'>Pre-Law</h2>
          {/* <h2 className='bio'>{user.bio}</h2> */}
        </div>
        <div className="Decks">
          <h1 className="myDecksTitle">My Decks</h1>

        </div>
        <div className="studyList">
          <h1 className="myStudyListTitle">Study List</h1>


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
