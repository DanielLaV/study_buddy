import { useState } from 'react';
import * as userActions from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';

function EditBioForm({setShowModal, deck}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [bio, setBio] = useState(user.bio);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async e => {
        e.preventDefault();

        setErrors([]);
        const newBio = {
            id: user.id,
            bio, 
            email: user.email, 
            username: user.username
        }

        dispatch(userActions.editBio(newBio))
        setShowModal(false);
    };


    return (
        <div className="editBioForm">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='title'>
                    Bio
                    <input
                        type='text'
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        required
                    />
                </label>
                <button className='addDeckSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default EditBioForm;
