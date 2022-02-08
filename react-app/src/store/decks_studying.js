const LOAD_STUDY_DECKS = 'LOAD_STUDY_DECKS';
const DELETE_STUDY_DECK = 'DELETE_STUDY_DECK';

const loadStudyDecks = (studyDecks) => {
	return {
		type: LOAD_STUDY_DECKS,
		studyDecks
	};
};

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

export const removeStudyDeck = (id) => async (dispatch) => {
	const response = await fetch(`/api/user-study-decks/${id}`, {
        method: 'DELETE'
	});
    const data = await response.json();
	if (response.ok) {
		dispatch(deleteStudyDeck(data.id));
		return null;
	}
    else {
        return response
    }
};

const initialState = {};

const studyDecksReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_STUDY_DECKS: {
			const newState = Object.assign({}, state);
			action.studyDecks.study_decks.forEach((studyDeck) => {
				newState[studyDeck.id] = studyDeck.decks;
			});
			return newState;
		}
        case DELETE_STUDY_DECK: {
            const newState = Object.assign({}, state);
            delete newState[action.studyDeck];
            return newState;
        }
        default: {
            return state;
        }
	}

};

export default studyDecksReducer;
