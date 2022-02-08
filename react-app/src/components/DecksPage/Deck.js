import './DecksPage.css'
import { useSelector } from 'react-redux';
import EditDeckFormModal from '../EditDeckModal';

function Deck({ deck }) {

    const user = useSelector(state => state.session.user.id)
    const isOwner = user === deck.user_id;
    // console.log(user, deck.user_id, isOwner);

    return (
        <div className="singleDeck">
            <h2 className='deckTitle'>{deck.title}</h2>
            <p className='deckDesc'>{deck.description}</p>
            {isOwner && <EditDeckFormModal deck={deck} /> }
        </div>
    )
}

export default Deck;
