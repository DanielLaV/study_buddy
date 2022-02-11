import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, NavLink } from 'react-router-dom';
import StudyList from '.';
import { getStudyDecks } from '../../store/decks_studying';
import Deck from '../DecksPage/Deck';
import "../DecksPage/DecksPage.css"


const StudyListPage = () => {

	return (
    <div className='StudyListPageContainer'>
      <StudyList/>
    </div>

	)
};

export default StudyListPage;
