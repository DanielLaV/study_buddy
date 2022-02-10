import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, NavLink } from 'react-router-dom';
import { getStudyDecks } from '../../store/decks_studying';
import Deck from '../DecksPage/Deck';
import "../DecksPage/DecksPage.css"


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

    let showStudyDecks = studyArr.map((deck) => (
        <div key={deck.id} className="study-list-deck">
            <Deck deck={deck} studyDecks={studyDecks} />
        </div>
    ))

		let className='';

		if (window.location.pathname === "/"){
			className="homePageStudyDecks"
		}

		else{
			className="studyDecksPage"
		}



	return (
        <div className={className}>
					<div className="browseDecksTitleContainer">
						<h1 className="browseDecksTitle">Study List</h1>
					</div>
					<div className='deckDisplay'>
						<div className='allDecks'>

					



            {(stateUserId === parseInt(userId)) || (stateUserId && window.location.pathname === "/") ?
			studyArr.map((deck) => (
				<NavLink to={`/decks/${deck.id}`} className='eachDeck' key={deck.id}>
					<Deck deck={deck} studyDecks={studyDecks} />
				</NavLink>
				
			))
			
		 :
        <Redirect to="/" />}
					</div>
				</div>
				<div className='addDeckButtonContainer'> {/* Added for layout */}
        </div>
			</div>
	);
};

export default StudyList;
