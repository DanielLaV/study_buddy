import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import './StudyList.css';
import Deck from '../DecksPage/Deck';
import DeleteModal from '../DeleteFromStudyListModal';

const StudyList = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.session.user.id);
	const studyArr = useSelector((state) => Object.values(state.studyDecks));

    let studyDecks = []
    studyArr.forEach((studyDeck) => {
        studyDecks.push(studyDeck.id)
        return studyDecks
    })

	console.log(studyDecks);
	useEffect(() => {
		dispatch(getStudyDecks(userId))
    }, [ dispatch, userId ]);

	return (
		<div>
			<h1 className="study-list-title">Study List</h1>
			{studyArr.map((deck) => (
				<div key={deck.id} className="study-list-deck">
					<Deck deck={deck} studyDecks={studyDecks} />
				</div>
			))}
		</div>
	);
};

export default StudyList;
