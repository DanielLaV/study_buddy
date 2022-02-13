import './DecksPage.css'
import { useSelector } from 'react-redux';
import DeleteFromSLButton from '../DeleteFromStudyListModal';
import AddToStudyList from '../AddToStudyList'
import '../Card/card.css'

function Deck({ deck, studyDecks = [] }) {

    const user = useSelector(state => state.session.user.id)
    const isStudying = studyDecks.includes(deck.id)

    return (
        <div className="frontOfDeck">
            <p className='title'>{deck.title}</p>

            {!isStudying &&
                <AddToStudyList deck_id={deck.id} user_id={user} />}
            {isStudying && <DeleteFromSLButton deck_id={deck.id} user_id={user} />}
        </div>
    )
}

export default Deck;
