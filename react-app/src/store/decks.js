

const LOAD_DECKS = 'LOAD_DECKS';
const ADD_DECK = 'ADD_DECK';
const EDIT_DECK = 'EDIT_DECK';
const DELETE_DECK = 'DELETE_DECK';



/* ----- ACTIONS ----- */
export const loadDecks = decks => {
    return {
        type: LOAD_DECKS,
        payload: decks,
    }
};

export const addNewDeck = newDeck => {
    return {
        type: ADD_DECK,
        payload: newDeck
    }
}

export const deleteOneDeck = deck => {
    return {
        type: DELETE_DECK,
        payload: deck
    }
}

/* ----- SELECTORS / THUNKS ----- */
export const getDecks = () => async (dispatch) => {

    const res = await fetch('/api/decks/');
    const data = await res.json();
    if (res.ok) {
        dispatch(loadDecks(data.decks));
        return res;
    }
}

export const getOneDeck = (id) => async (dispatch) => {
    const res = await fetch(`/api/decks/${id}`, {
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewDeck(data))
    }
    return data;
}

export const addDeck = (newDeck) => async (dispatch) => {

    const res = await fetch('/api/decks/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDeck)
    })
    const data = await res.json();

    if (res.ok) {
        return dispatch(addNewDeck(data));
    }
    else return data
}

export const editDeck = deck => async (dispatch) => {
    const res = await fetch(`/api/decks/${deck.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deck)
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewDeck(data));
    }
    return data;
}

export const deleteDeck = commit => async (dispatch) => {
    const currDeck = await fetch(`/api/decks/${commit.deck_id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (currDeck.ok) {
        const delDeck = await fetch(`/api/decks/${commit.deck_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'DELETE',
                body: JSON.stringify(commit)
            });
        if (delDeck.ok) {
            const deck = await currDeck.json();
            dispatch(deleteOneDeck(deck));
            return deck;
        }
        else return delDeck;
    }
    else return currDeck;
}



/* ----- REDUCER ------ */
const initialState = {};

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DECKS: {
            const newState = {};
            action.payload.forEach((deck) => {
                newState[deck.id] = deck;
            })
            return newState;
        }
        case ADD_DECK: {
            const newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_DECK: {
            const newState = Object.assign({}, state);
            delete newState[action.payload.id];
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default decksReducer;
