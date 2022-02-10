import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as tagActions from '../../store/tags'
import Deck from '../DecksPage/Deck'
import Tags from '../Tags'

function TagPage() {
    const dispatch = useDispatch()
    const { tagId } = useParams()
    const tag = useSelector(state => Object.values(state.tags))
    const decks = useSelector(state => Object.values(state.decks));

    console.log('-------tag------', tag)
    console.log('-------decks------', decks)


    // useEffect(()=> {
    //     dispatch(tagActions.getDecksByTag(tagId))
    // }, [dispatch])

    return(
        <div className='decks-by-tag'>
            <h1>{tag.name}</h1>
            {decks?.map(deck => <div key={deck.id}> <Deck deck={deck} /> </div>)}
        </div>
    )
}

export default TagPage;
