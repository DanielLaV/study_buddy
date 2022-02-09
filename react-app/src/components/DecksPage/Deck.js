import './DecksPage.css'
import { useSelector } from 'react-redux';
import EditDeckFormModal from '../EditDeckModal';
import DeleteDeckFormModal from '../DeleteDeckModal';
import DeleteModal from '../DeleteFromStudyListModal';
import AddToStudyList from '../AddToStudyList'

function Deck({ deck, studyDecks=[] }) {

    const user = useSelector(state => state.session.user.id)
    // const studyDecks = useSelector(state => Object.values(state.studyDecks))
    // const studyKeys = useSelector(state => Object.values(state.studyDecks))

    //   console.log(studyDecks)

    // let arr = []
    // studyDecks.forEach((studyDeck) => {
    //     arr.push(studyDeck.id)
    //     return arr
    // })
    //  console.log('---------arr-------', arr) // [1, 2]

    const isOwner = user === deck.user_id;
    const isStudying = studyDecks.includes(deck.id)
    return (
        <div className="singleDeck">
            <h2 className='deckTitle'>{deck.title}</h2>
            <p className='deckDesc'>{deck.description}</p>
            {!isStudying &&
            <AddToStudyList deck_id={deck.id} user_id={user}/>}
            {isStudying && <DeleteModal id={deck.id}/>}
            {isOwner &&
            <div className='editDeleteButtons'>
                <EditDeckFormModal deck={deck} />
                <DeleteDeckFormModal deck={deck} />
            </div>}
        </div>
    )
}

export default Deck;
