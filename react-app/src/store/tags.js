import { loadDecks } from "./decks";
const LOAD_TAGS = 'LOAD_TAGS';
const ADD_TAGS = 'ADD_TAGS';
const DELETE_TAG = 'DELETE_TAG'

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

const deleteTag = (tag) => {
    return {
        type: DELETE_TAG,
        tag
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

export const getDecksByTag = (tagId) => async(dispatch) => {
    const res = await fetch(`/api/tags/${tagId}`)
    if (res.ok) {
        const data = await res.json();
        const decksStore = [];
        data.decks.forEach((deck) => {
            decksStore.push(deck.decks);
        })
        const tagsStore = [];
        const tagsData = data.decks;
        tagsData.forEach((tag) => {
            delete tag.decks;
            console.log("tag", tag);
            tagsStore.push(tag)
        })
		dispatch(loadDecks(decksStore));
        dispatch(loadTags(tagsStore))
		return data;
	}
    else {
        return res
    }
}


export const addTags = (tags) => async (dispatch) => {
    const res = await fetch('/api/tags/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tags)
    })
    const data = await res.json();
    dispatch(addNewTags(data));
    return res;
}


export const removeTag = (tagId) => async (dispatch) => {
	const response = await fetch(`/api/tags/${tagId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tagId)
	});

    const data = await response.json();
	if (response.ok) {
		dispatch(deleteTag(data));
		return null;
	}
    else {
        return response
    }
};

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
        case DELETE_TAG: {
            const newState = Object.assign({}, state);
            delete newState[action.tag.id];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default tagsReducer;
