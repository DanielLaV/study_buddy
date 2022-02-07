const LOAD = 'studybuddy/card/LOAD'
const ADD_CARD = 'studybuddy/card/ADD_CARD'
const DELETE_CARD = 'studybuddy/card/DELETE_CARD'
const DELETE_DECK_CARDS = 'studybuddy/cards/DELETE_DECK_CARDS'

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

const deleteAllDeckCards = cards => ({
    type: DELETE_DECK_CARDS,
    cards
})

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

export const getOneCard = (id) => async (dispatch) => {
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

export const createCard = (payload) => async (dispatch) => {
    const response = await fetch("/api/cards", {
        method: 'POST', body: JSON.stringify(payload)
    });
    const card = await response.json();
    if (response.ok) {
        dispatch(addOneCard(card));
    }
    return card
}

const cardsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            const allCards = {};
            action.cards.forEach((card) => {
                allCards[card.id] = card;
            });
            return { ...allCards, ...state }
        }
        case ADD_CARD: {
            const newCard = { ...state };
            if (!state[action.card.id]) {
                newCard[action.card.id] = action.card
                return { ...newCard }
            }
            return newCard;
        }
        case DELETE_CARD: {
            const allCards = { ...state };
            delete allCards[action.card.id];
            return allCards;
        }
        case DELETE_DECK_CARDS: {
            const allCards = { ...state };
            action.cards.forEach((card) => {
                delete allCards[card.id];
            });
            return allCards;
        }
        default: return state;
    }
}

export default cardsReducer
