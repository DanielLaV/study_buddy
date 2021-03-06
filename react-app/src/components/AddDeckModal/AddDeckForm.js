import { useState } from 'react';
import * as deckActions from '../../store/decks';
import { useDispatch, useSelector } from 'react-redux';

function AddDeckForm({ setShowModal }) {
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");



    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newDeck = {
            title,
            description,
            user_id
        }

        return dispatch(deckActions.addDeck(newDeck))
            .then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                }
            );
    };

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
            <h2 style={{color:"green", marginBottom:"-20px"}}>{success}</h2>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='form'>
                <h1>Add Deck</h1>

                    <input
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        placeholder='Title'
                        className='input'
                    />
                </label>
                <label>
                </label>
                <input
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder='Description'
                    className='input'
                />

                <div className='form-button-container'>
                    <button className='form-button'>Add Deck</button>
                </div>
            </form>
        </div>
    )
}

export default AddDeckForm;
