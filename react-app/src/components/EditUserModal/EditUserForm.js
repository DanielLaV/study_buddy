import { useState } from 'react';
import { editUser } from '../../store/users';
import { useDispatch, useSelector } from 'react-redux';

function EditUserForm({ setShowModal }) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const [ bio, setBio ] = useState(user.bio);
	const [ errors, setErrors ] = useState([]);
	const [ success, setSuccess ] = useState('');

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
		<div className="edit-user-form">
			{success}
			<form onSubmit={handleSubmit}>
				<ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
				<label className="title">
					Bio
					<input type="text" value={bio} onChange={(e) => setBio(e.target.value)} required />
				</label>
				<button className="addDeckSubmit">Submit</button>
			</form>
		</div>
	);
}

export default EditUserForm;
