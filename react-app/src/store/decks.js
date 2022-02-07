

export const LOAD_DECKS = 'LOAD_DECKS';


/* ----- ACTIONS ----- */
export const loadDecks = decks => {
    return {
        type: LOAD_DECKS,
        payload: decks,
    }
};

/* ----- SELECTORS / THUNKS ----- */
export const getDecks = () => async (dispatch) => {

    const res = await fetch('/api/decks');
    const data = await res.json();
    dispatch(loadDecks(data.decks));
    return res;
}


/* ----- REDUCER ------ */
const initialState = { };

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DECKS: {
            let newState = Object.assign({}, state);
            newState.decks = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default decksReducer;
