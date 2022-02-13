const LOAD_STUDY_DECKS = 'LOAD_STUDY_DECKS';
const ADD_STUDY_DECK = 'ADD_STUDY_DECK'
const DELETE_STUDY_DECK = 'DELETE_STUDY_DECK';

const loadStudyDecks = (studyDecks) => {
	return {
		type: LOAD_STUDY_DECKS,
		studyDecks
	};
};

const addStudyDeck = (studyDeck) => {
    return {
        type: ADD_STUDY_DECK,
        studyDeck
    }
}

const deleteStudyDeck = (studyDeck) => {
	return {
		type: DELETE_STUDY_DECK,
		studyDeck
	};
};

export const getStudyDecks = (userId) => async (dispatch) => {
	const response = await fetch(`/api/user-study-decks/${userId}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		const data = await response.json();
		dispatch(loadStudyDecks(data));
		return data;
	}
    else {
        return response
    }
};

export const addOneStudyDeck = (deck_id, user_id) => async (dispatch) => {
    const studyDeck = {deck_id}
    const response = await fetch(`/api/user-study-decks/${user_id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(studyDeck)
        })
        const data = await response.json();
        if (data.error) {
            return
        }
        dispatch(addStudyDeck(data));
        return response;
    }

export const removeStudyDeck = (deck_id, user_id) => async (dispatch) => {
    const studyDeck = {deck_id, user_id}
	const response = await fetch(`/api/user-study-decks/${user_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        Accept: 'application/json',
        body: JSON.stringify(studyDeck)
	});

    const data = await response.json();
	if (response.ok) {
		dispatch(deleteStudyDeck(data));
		return null;
	}
    else {
        return response
    }
};

const studyDecksReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_STUDY_DECKS: {
			const newState = {};
			action.studyDecks.study_decks.forEach((studyDeck) => {
				newState[studyDeck.id] = studyDeck.decks;
			});
			return newState;
		}
        case ADD_STUDY_DECK: {
            const newState = Object.assign({}, state);
            newState[action.studyDeck.id] = action.studyDeck.decks
            return newState;
        }
        case DELETE_STUDY_DECK: {
            const newState = Object.assign({}, state);
            delete newState[action.studyDeck.id];
            return newState;
        }
        default: {
            return state;
        }
	}

};

export default studyDecksReducer;
