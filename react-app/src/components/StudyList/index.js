import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import './StudyList.css'
const UserSnacks = () => {
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
			<h1>Made it</h1>
            {studyDeckArr.map(({ id, title, description }) => (
            <li key={id} className="study_decks_list">
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </li>
			))}
		</div>
	);
};

export default UserSnacks;
