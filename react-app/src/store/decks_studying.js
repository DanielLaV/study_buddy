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
		dispatch(loadStudyDecks(data));
		return data;
	}
};
const initialState = {};
//  [ {'id': 1, 'user_id': 1, 'deck_id': 1, 'toStudy': True,
//   'decks': {'id': 1, 'title': 'Thunks', 'description': 'Taking a look at React thunks'}},
//  {'id': 2, 'user_id': 1, 'deck_id': 2, 'toStudy': True,
//  'decks': {'id': 2, 'title': 'Memoization', 'description': 'No one knows what it is'}} ]}
const studyDecksReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_STUDY_DECKS: {
			const newState = Object.assign({}, state);
			action.payload.study_decks.forEach((studyDeck) => {
                console.log('---------------', Object.values (studyDeck))
				newState[studyDeck.id] = Object.values(studyDeck)[1];
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default studyDecksReducer;
