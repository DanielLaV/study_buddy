import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import Deck from '../DecksPage/Deck';
import "../MyDecks/MyDecks.css"
import { NavLink } from 'react-router-dom';


const StudyList = () => {
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

	return (
			<div className='decks'> 
					{studyArr.map(deck => <NavLink className="Deck" to='' key={deck.id} > <Deck deck={deck} studyDecks={studyDecks} /> </NavLink>)}
		</div>
	)
	}

export default StudyList;
