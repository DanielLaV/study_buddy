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
            <p className='title'>{deck.title}</p>
        </div>
    )
}

export default MyDecks;
