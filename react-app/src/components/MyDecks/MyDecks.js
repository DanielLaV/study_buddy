import './MyDecks.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStudyDecks } from '../../store/decks_studying';
import Deck from '../DecksPage/Deck';


function MyDecks({ deck }) {


    const dispatch = useDispatch();
    const stateUserId = useSelector((state) => state.session.user.id);
    const studyArr = useSelector((state) => Object.values(state.studyDecks));

    let studyDecks = []
    studyArr.forEach((studyDeck) => {
        studyDecks.push(studyDeck.id)
        return studyDecks
    })

    useEffect(() => {
        dispatch(getStudyDecks(stateUserId))
    }, [dispatch, stateUserId]);


    return (
        <Deck deck={deck} studyDecks={studyDecks} />
    )
}

export default MyDecks;
