import './DecksPage.css'
import { useSelector } from 'react-redux';
import EditDeckFormModal from '../EditDeckModal';
import DeleteDeckFormModal from '../DeleteDeckModal';
import DeleteModal from '../DeleteFromStudyListModal';
import AddToStudyList from '../AddToStudyList'

function Deck({ deck }) {

    const user = useSelector(state => state.session.user.id)
    const isOwner = user === deck.user_id;
    const isStudying = false;

    return (
        <div className="singleDeck">
            <h2 className='deckTitle'>{deck.title}</h2>
            <p className='deckDesc'>{deck.description}</p>
            {isStudying && <DeleteModal id={deck.id}/>}
            {!isStudying && <AddToStudyList deck_id={deck.id} user_id={user}/>}
            {isOwner &&
                <div className='editDeleteButtons'>
                    <EditDeckFormModal deck={deck} />
                    <DeleteDeckFormModal deck={deck} />
                </div>}
        </div>
    )
}

export default Deck;
