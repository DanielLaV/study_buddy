import '../MyDecks/MyDecks.css'
import { useSelector } from 'react-redux';
import EditDeckFormModal from '../EditDeckModal';
import DeleteDeckFormModal from '../DeleteDeckModal';
import DeleteFromSLButton from '../DeleteFromStudyListModal';
import AddToStudyList from '../AddToStudyList'

function Deck({ deck, studyDecks=[] }) {

    const user = useSelector(state => state.session.user.id)
    const isOwner = user === deck.user_id;
    const isStudying = studyDecks.includes(deck.id)

    return (
        <div>
            <h2 className='title'>{deck.title}</h2>
            {window.location.pathname != "/" &&
            <p className='deckDesc'>{deck.description}</p>}
            {/* <p className='deckDesc'>{deck.description}</p> */}
            {!isStudying &&
            <AddToStudyList deck_id={deck.id} user_id={user}/>}
            {isStudying && <DeleteFromSLButton deck_id={deck.id} user_id={user}/>}
            {isOwner &&
            <div className='editDeleteButtons'>
                <EditDeckFormModal deck={deck} />
                <DeleteDeckFormModal deck={deck} />
            </div>}
        </div>
    )
}

export default Deck;
