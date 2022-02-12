import { useState } from 'react';
import { editUser } from '../../store/session';
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
		<div className='form-container'>
			<form className="form" onSubmit={handleSubmit}>
			<h2 style={{color:"green", marginBottom:"-50px"}}>
				{success}
				</h2>
				<ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
				<label className="names"></label>

					<h1>Bio</h1>
					<input className='input'type="text" place value={bio} onChange={(e) => setBio(e.target.value)} required />
					<div className='form-button-container'>
              <button className='form-button'>Update</button>
          </div>			
				</form>
		</div >

	);
}

export default EditUserForm;
