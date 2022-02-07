const LOAD_STUDY_DECKS = 'LOAD_STUDY_DECKS';

export const loadStudyDecks = (studyDecks) => {
	return {
		type: LOAD_STUDY_DECKS,
		payload: studyDecks
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
		dispatch(loadStudyDecks(data.study_decks));
		return data;
	}
};

const initialState = {};

const studyDecksReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_STUDY_DECKS: {
			const newState = Object.assign({}, state);
			action.payload.forEach((studyDeck) => {
				newState[studyDeck.id] = studyDeck;
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default studyDecksReducer;
