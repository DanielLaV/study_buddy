const LOAD_TAGS = 'LOAD_TAGS';
const ADD_TAGS = 'ADD_TAGS';

const loadTags = (tags) => {
	return {
		type: LOAD_TAGS,
		tags
	};
};

const addNewTags = (tags) => {
    return {
        type: ADD_TAGS,
        tags
    }
}


export const getTags = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}/tags/`)
	if (response.ok) {
        const data = await response.json();
		dispatch(loadTags(data.tags));
		return data;
	}
    else {
        return response
    }
};


export const addTags = (tags) => async (dispatch) => {
    const res = await fetch('/api/tags/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tags)
    })
    const data = await res.json();
    console.log('---------data from backend-------',data)
    dispatch(addNewTags(data));
    return res;
}


const tagsReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_TAGS: {
            const newState = Object.assign({}, state);
            console.log(action.tags)
            action.tags.forEach((tag) => {
                newState[tag.id] = tag;
            })
			return newState;
		}
        case ADD_TAGS: {
            const newState = Object.assign({}, state);
            for (let key in action.tags) {
                newState[key] = action.tags[key]
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default tagsReducer;
