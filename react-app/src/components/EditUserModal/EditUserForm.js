import { useState } from 'react';
import { editUser } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

function EditUserForm({ setShowModal }) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const [bio, setBio] = useState(user.bio);
	const [errors, setErrors] = useState([]);
	const [success, setSuccess] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors([]);
		const newBio = {
			id: user.id,
			bio
		};
		return dispatch(editUser(newBio)).then((response) => {
			if (response.errors) {
				setErrors(response.errors);
				return;
			}
			setSuccess('Success!');
			setTimeout(() => {
				setShowModal(false);
			}, 1500);
		});
	};

	return (
		<div className="form-container">
			{success}
			<form onSubmit={handleSubmit}>
				<ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
				<label className="title">
					Bio
					<input className='input' type="text" value={bio} onChange={(e) => setBio(e.target.value)} required />
				</label>
				<div className='button-container'>
					<button className="form-button">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default EditUserForm;
