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


    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        dispatch(deckActions.editDeck(deck))
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
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <button className='addDeckSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default EditDeckForm;
