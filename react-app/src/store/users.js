const LOAD_USER = 'LOAD_USER';

export const loadUser = (user) => {
	return {
		type: LOAD_USER,
		user
	};
};

export const getUser = (id) => async (dispatch) => {
    console.log('id',id)
    const res = await fetch(`/api/users/${id}`, {
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    console.log('data from backend:',data)
    if (res.ok) {
        dispatch(loadUser(data))
    }
    return data;
}

export const editUser = (user) => async (dispatch) => {
	const response = await fetch(`/api/users/${user.id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	});
	const data = await response.json();
	if (response.ok) {
		dispatch(loadUser(data));
	}
	return data;
}


const usersReducer = (state = {}, action) => {
    switch (action.type) {

        case LOAD_USER: {
            console.log('action:',action)
            const newState = Object.assign({}, state);
            newState[action.user.id] = action.user
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default usersReducer;
