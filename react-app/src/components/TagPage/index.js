import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as tagActions from '../../store/tags'
import Deck from '../DecksPage/Deck'
import Tags from '../Tags'

function TagPage() {
    const dispatch = useDispatch()
    const { tagId } = useParams()
    const tags = useSelector(state => state.tags)
    const decks = useSelector(state => Object.values(state.decks));
    const tag = tags[tagId]

    useEffect(() => {
        dispatch(tagActions.getDecksByTag(tagId));
    }, [dispatch, tagId])

    return (
        <div className='decks-by-tag'>
            <h1>Decks with tag "{tag?.name}"</h1>
            {decks?.map(deck => <div key={deck.id}> <Deck deck={deck} /> </div>)}
        </div>
    )
}

export default TagPage;
