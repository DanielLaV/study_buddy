const LOAD = 'studybuddy/card/LOAD'
const ADD_CARD = 'studybuddy/card/ADD_CARD'
const DELETE_CARD = 'studybuddy/card/DELETE_CARD'

const load = cards => ({
    type: LOAD,
    cards
});

const addOneCard = card => ({
    type: ADD_CARD,
    card
});

const deleteOneCard = card => ({
    type: DELETE_CARD,
    card
});

export const getDeckCards = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}/cards/`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        const cards = await response.json();
        dispatch(load(cards));
        return cards;
    }
}

export const getOneCard = () => async (dispatch) => {
    const response = await fetch(`/api/cards/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const card = await response.json();
    if (response.ok) {
        dispatch(addOneCard(card));
    }
    return card;
}

export const deleteCard = (id) => async (dispatch) => {
    const currCard = await fetch(`/api/cards/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (currImage.ok) {
        const delCard = await fetch(`/api/images/${id}`,
            { method: 'DELETE' });
        if (delCard.ok) {
            const card = await currCard.json();
            dispatch(deleteOneCard(card));
            return card;
        }
        else return delCard.json();
    }
    else return delCard.json();
}

export 
