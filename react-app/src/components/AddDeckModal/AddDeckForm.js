import './AddDeckForm.css';
import { useState } from 'react';
import * as deckActions from '../../store/decks';
import { useDispatch, useSelector } from 'react-redux';

function AddDeckForm({setShowModal}) {
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newDeck = {
            title,
            description,
            user_id
        }
        // console.log('newdeck', newDeck)
        dispatch(deckActions.addDeck(newDeck))
        setShowModal(false);
    };

    return (
        <div className="addDeckForm">
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
                        placeholder='Title'
                    />
                </label>
                <label className='description'>
                    Description
                    <input
                        type='text'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Description'
                    />
                </label>
                <button className='addDeckSubmit'>Add New Deck</button>
            </form>
        </div>
    )
}

export default AddDeckForm;
