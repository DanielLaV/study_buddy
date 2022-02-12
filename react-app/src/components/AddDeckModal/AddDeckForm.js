import './AddDeckForm.css';
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
        // console.log('newdeck', newDeck)
        return dispatch(deckActions.addDeck(newDeck))
            .then(
                (response) => {
                    console.log(response);
                    console.log("response.errors", response.errors)
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
            <h2 style={{color:"green"}}>{success}</h2>
            <form className='form' onSubmit={handleSubmit}>
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
