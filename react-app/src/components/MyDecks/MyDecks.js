import './MyDecks.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EditDeckFormModal from '../EditDeckModal';
import DeleteDeckFormModal from '../DeleteDeckModal';


function MyDecks({ deck }) {

    const user = useSelector(state => state.session.user.id)
    const isOwner = user === deck.user_id;


    return (
        <div>
            <h2 className='title'>{deck.title}</h2>
            {/* <p className='deckDesc'>{deck.description}</p>
            {isOwner &&
                <div className='editDeleteButtons'>
                    <EditDeckFormModal deck={deck} />
                    <DeleteDeckFormModal deck={deck} />
                </div>} */}
        </div>
    )
}

export default MyDecks;
