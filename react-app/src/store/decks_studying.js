const LOAD_STUDY_DECKS = 'LOAD_STUDY_DECKS';

export const loadStudyDecks = (studyDecks) => {
	return {
		type: LOAD_STUDY_DECKS,
		payload: studyDecks
	};
};

export const getStudyDecks = (id) = async (dispatch) => {
	const response = await fetch(`/api/user-study-card/:${id}`);
	if (response.ok) {
		const data = await response.json();
		dispatch(loadStudyDecks(data));
		return response;
	}
};

const initialState = {};

const studyDecksReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_STUDY_DECKS: {
            action.studyDecks.forEach((studyDeck) => {
                newState[studyDeck.id] = studyDeck
            })
            return {
                ...state,
                initialState: {...newState}
            }

        }
    }
}

export default studyDecksReducer;
