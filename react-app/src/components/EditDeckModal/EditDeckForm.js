import './EditDeckForm.css';
import { useState } from 'react';
import * as deckActions from '../../store/decks';
import { useDispatch, useSelector } from 'react-redux';

function EditDeckForm({setShowModal, deck}) {
    const dispatch = useDispatch();
    // const user_id = useSelector(state => state.session.user.id);
    const [title, setTitle] = useState(deck.title);
    const [description, setDescription] = useState(deck.description);
    const [errors, setErrors] = useState([]);
    const user_id = useSelector(state => state.session.user.id);


    const handleSubmit = async e => {
        e.preventDefault();

        setErrors([]);
        const newDeck = {
            id: deck.id,
            title,
            description,
            user_id
        }

        // console.log("Deck is", newDeck);
        dispatch(deckActions.editDeck(newDeck))
        setShowModal(false);
    };


    return (
        <div className="editDeckForm">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='title'>
                    Title
                    <input
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label className='description'>
                    Description
                    <input
                        type='text'
                        value={description}
                        onChange={e => {setDescription(e.target.value); console.log(description)}}
                    />
                </label>
                <button className='addDeckSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default EditDeckForm;
