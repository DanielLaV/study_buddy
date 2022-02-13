import './DeckIdPage.css';
import { useEffect } from 'react';
import * as deckActions from "../../store/decks";
import * as tagActions from "../../store/tags";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddCardFormModal from '../AddCardFormModal';
import CardBrowser from '../CardsBrowser';
import AddTagFormModal from '../AddTagsFormModal';
import Tags from '../Tags'
import EditDeckFormModal from '../EditDeckModal';
import DeleteDeckFormModal from '../DeleteDeckModal';
<<<<<<< HEAD

=======
>>>>>>> main

function DeckIdPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user.id)
    const { deckId } = useParams();
    const deck = useSelector(state => state.decks[deckId])

    useEffect(() => {
        dispatch(deckActions.getOneDeck(deckId));
        dispatch(tagActions.getTags(deckId))
        return () => {
            dispatch(deckActions.getOneDeck(deckId));
            dispatch(tagActions.getTags(deckId))
        }
    }, [dispatch, deckId]);


    if (deck) {
        const isOwner = user === deck?.user_id;

        return (
            <div className='cardPageContainer'>
                <div key={deck.id} className='deckIdPage'>
                    <div className='deckNameContainer'>
<<<<<<< HEAD
                            <h1 className='deckName'>{deck.title}</h1>
                       
            
=======
                        <h1 id='deck-title'>{deck.title}
                            {isOwner && <>
                                <EditDeckFormModal deck={deck} />
                                <DeleteDeckFormModal deck={deck} />
                            </>}
                        </h1>
                        <h2 id="deck-desc">{deck.description}</h2>
>>>>>>> main
                        <div className='tags-container'>
                            <Tags />
                        </div>
                        {isOwner &&
                            <div className='addCardOrTag'>
                                <AddCardFormModal />
                                <AddTagFormModal />
                            </div>}
                            
                    </div>
                    <CardBrowser />
<<<<<<< HEAD
                    {isOwner &&
            <div className='editDeleteButtons'>
                <EditDeckFormModal deck={deck} />
                <DeleteDeckFormModal deck={deck} />
            </div>} 
                  
=======

>>>>>>> main
                </div>
                
            </div>
        )
    }
    else return "DON'T LOOK AT ME! I'M HIDEOUS"
}

export default DeckIdPage;
