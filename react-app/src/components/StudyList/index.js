import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import './StudyList.css'
import Deck from '../DecksPage/Deck';
import DeleteModal from '../DeleteFromStudyListModal';

const StudyList = () => {
	const dispatch = useDispatch();
	const { userId } = useParams();
    const studyDecks = useSelector(state => Object.values(state.studyDecks));

	useEffect(
        () => {
            dispatch(getStudyDecks(userId));
		},
		[ dispatch, userId ]
        );

	return (
		<div>
			<h1 className='study-list-title'>Study List</h1>
            {studyDecks.map((deck) => (
            <li key={deck.id} className="study-list-container">
                <div className="study-list-deck">
                    <Deck deck={deck} />
                    <DeleteModal id={deck.id} />
                </div>
            </li>
			))}
		</div>
	);
};

export default StudyList;
