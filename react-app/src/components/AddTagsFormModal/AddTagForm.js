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
    const [success, setSuccess] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newTags = {
            names,
            deck_id: +deck_id
        }

        return dispatch(tagActions.addTags(newTags))
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
        <div className='form-container'>
            <h2>{success}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='names'></label>
                    Tag Names (comma, separated):
                    <input
                        type='names'
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        required
                        className='input'
                        placeholder='Example: Javascript, React, Pug?'
                    />

                <div className='form-button-container'>
                    <button className='form-button'>Add Tags to Deck</button>
                </div>
            </form>
        </div >
    )
}

export default AddTagForm;
