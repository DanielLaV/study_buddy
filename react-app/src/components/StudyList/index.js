import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import './StudyList.css'
import DeleteModal from '../DeleteFromStudyListModal';

const StudyList = () => {
	const dispatch = useDispatch();
	const { userId } = useParams();
    const studyDecks = useSelector(state => state.studyDecks);
    const studyDeckArr = Object.values(studyDecks)

	useEffect(
        () => {
            dispatch(getStudyDecks(userId));
		},
		[ dispatch, userId ]
        );


	return (
		<div>
			<h1 className='study-list-title'>Study List</h1>
            {studyDeckArr.map(({ id, title, description }) => (
            <li key={id} className="study-list-container">
                <div className="study-list-deck">
                    <h2 className='study-deck-title'>{title}</h2>
                    <p>{description}</p>
                    <DeleteModal id={id} />
                </div>
            </li>
			))}
		</div>
	);
};

export default StudyList;
