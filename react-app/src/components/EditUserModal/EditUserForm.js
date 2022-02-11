import { useState } from 'react';
// import * as deckActions from '../../store/decks';
import { useDispatch, useSelector } from 'react-redux';

function EditUserForm({setShowModal, deck}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [bio, setBio] = useState(user.bio);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");


    const handleSubmit = async e => {
        e.preventDefault();

        setErrors([]);
        const newBio = {
            id: user.id,
            bio
        }
        // return dispatch(editCard(newBio))
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
        <div className="edit-user-form">
            {/* <form onSubmit={handleSubmit}>
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
            </form> */}
        </div>
    )
}

export default EditUserForm;
