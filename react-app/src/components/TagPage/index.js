import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as tagActions from '../../store/tags'
import Deck from '../DecksPage/Deck'
import * as studyDeckActions from "../../store/decks_studying";
import { NavLink } from 'react-router-dom';

function TagPage() {
    const dispatch = useDispatch()
    const { tagId } = useParams()
    const userId = useSelector(state => state.session.user.id)
    const tags = useSelector(state => state.tags)
    const decks = useSelector(state => Object.values(state.decks));
    const studyArr = useSelector(state => Object.values(state.studyDecks))
    const tag = tags[tagId]

    let studyDecks = []
    studyArr.forEach((studyDeck) => {
        studyDecks.push(studyDeck.id)
        return studyDecks
    })


    useEffect(() => {
        dispatch(tagActions.getDecksByTag(tagId));
        dispatch(studyDeckActions.getStudyDecks(userId));
    }, [dispatch, tagId, userId])

    return (
        <div className='browsePageContainer'>
            <div className="browseDecks">
                <div className="browseDecksTitleContainer">
                    <h1 className="browseDecksTitle">Decks with tag "{tag?.name}"</h1>
                </div>
                <div className='deckDisplay'>
                    <div className='allDecks'>
                        {decks?.map(deck =>
                            <NavLink className="eachDeck" to={`/decks/${deck.id}`} key={deck.id}>
                                <Deck deck={deck} studyDecks={studyDecks} />
                            </NavLink>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagPage;
