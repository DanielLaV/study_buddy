import './MyDecks.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Redirect, NavLink } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';

import EditDeckFormModal from '../EditDeckModal';
import DeleteDeckFormModal from '../DeleteDeckModal';
import Deck from '../DecksPage/Deck';


function MyDecks({ deck }) {

    
	const dispatch = useDispatch();
    const { userId } = useParams()
	const stateUserId = useSelector((state) => state.session.user.id);
	const studyArr = useSelector((state) => Object.values(state.studyDecks));

    let studyDecks = []
    studyArr.forEach((studyDeck) => {
        studyDecks.push(studyDeck.id)
        return studyDecks
    })

	useEffect(() => {
		dispatch(getStudyDecks(stateUserId))
    }, [ dispatch, stateUserId ]);

    const user = useSelector(state => state.session.user.id)
    const isOwner = user === deck.user_id;


    return (
        <Deck deck={deck} studyDecks={studyDecks}  />
    )
}

export default MyDecks;
