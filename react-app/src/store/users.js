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

const initialState = {}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case LOAD_DECKS: {
            //     const newState = Object.assign({}, state);
            //     action.payload.forEach((deck) => {
                //         newState[deck.id] = deck;
                //     })
                //     return newState;
                // }
        case LOAD_USER: {
            console.log('action:',action)
            const newState = Object.assign({}, state);
            newState[action.user.id] = action.user
            return newState;
        }
        // case DELETE_DECK: {
        //     const newState = Object.assign({}, state);
        //     delete newState[action.payload.id];
        //     return newState;
        // }
        default: {
            return state;
        }
    }
};

export default usersReducer;
