

export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';


/* ----- ACTIONS ----- */
export const loadDecks = decks => {
    return {
        type: LOAD_DECKS,
        payload: decks,
    }
};

export const addNewDeck = (newDeck) => {
    return {
        type: ADD_DECK,
        payload: newDeck
    }
}

/* ----- SELECTORS / THUNKS ----- */
export const getDecks = () => async (dispatch) => {

    const res = await fetch('/api/decks/');
    const data = await res.json();
    dispatch(loadDecks(data.decks));
    return res;
}

export const addDeck = (newDeck) => async (dispatch) => {
    // console.log('About to fetch')
    const res = await fetch('/api/decks/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newDeck)
    })
    const data = await res.json();
    // console.log("="*20, 'Data is', data)
    dispatch(addNewDeck(data));
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
        case ADD_DECK: {
            let newState = Object.assign({}, state);
            console.log('NEW DECK PAYLOAD', action.payload);
            newState = {
                ...newState,
                [action.payload.id]: action.payload
            };
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default decksReducer;
