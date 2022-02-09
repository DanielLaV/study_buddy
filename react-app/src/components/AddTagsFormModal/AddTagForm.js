import './AddTagForm.css';
import { useState } from 'react';
import * as tagActions from '../../store/tags';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

function AddTagForm({ setShowModal }) {
    const dispatch = useDispatch();
    const deck_id = useParams().deckId;
    const [names, setNames] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newTags = {
            names,
            deck_id
        }

        dispatch(tagActions.addTags(newTags))
        setShowModal(false);
    };

    return (
        <div className="addTagForm">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='names'>
                    Tag Names (comma, separated)
                    <input
                        type='names'
                        value={names}
                        onChange={e => setNames(e.target.value)}
                        required
                        placeholder='Javascript, React, Redux, Thunks'
                    />
                </label>
                <input
                    type='deck_id'
                    value={deck_id}
                    hidden
                />
            <button className='addTagsSubmit'>Add Tags to Deck</button>
        </form>
        </div >
    )
}

export default AddTagForm;
