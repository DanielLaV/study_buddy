import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import Deck from '../DecksPage/Deck';


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
		<div>
			<h1 className="study-list-title">Study List</h1>
            {stateUserId === parseInt(userId) ?
			studyArr.map((deck) => (
				<div key={deck.id} className="study-list-deck">
					<Deck deck={deck} studyDecks={studyDecks} />
				</div>
			))
		 :
        <Redirect to="/" />}
        </div>
	);
};

export default StudyList;
