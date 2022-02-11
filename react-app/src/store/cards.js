const LOAD = 'studybuddy/card/LOAD'
const ADD_CARD = 'studybuddy/card/ADD_CARD'
const DELETE_CARD = 'studybuddy/card/DELETE_CARD'
const DELETE_DECK_CARDS = 'studybuddy/cards/DELETE_DECK_CARDS'

const load = cards => ({
    type: LOAD,
    cards: cards.cards
});


const addOneCard = card => ({
    type: ADD_CARD,
    card
});

const deleteOneCard = card => ({
    type: DELETE_CARD,
    card
});

// const deleteAllDeckCards = cards => ({
//     type: DELETE_DECK_CARDS,
//     cards
// });



// export const deleteDeckCards = (deckId) => async (dispatch) => {
//     const currCards = await fetch(`api/decks/${deckId}/cards`)
//     if (currCards.ok) {
//         const delCards = await fetch(`api/decks/${deckId}/cards`,
//             {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 method: 'DELETE'
//             });
//         if (delCards.ok) {
//             const cards = await currCards.json();
//             dispatch(deleteAllDeckCards(cards));
//             return cards;
//         }
//         else return delCards.json();
//     }
//     else return currCards.json();
// }


export const createCard = (payload) => async (dispatch) => {
    const response = await fetch("/api/cards/", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    const card = await response.json();
    if (response.ok) {
        dispatch(addOneCard(card));
    }
    return card
}


export const getDeckCards = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}/cards/`, {
        headers: { "Content-Type": "application/json" }
    });
    const cards = await response.json();
    if (response.ok) {
        dispatch(load(cards));
    }
    return cards;
}

export const getCards = () => async (dispatch) => {
    const response = await fetch(`/api/cards`, {
        headers: { "Content-Type": "application/json" }
    });
    const cards = await response.json();
    if (response.ok) {
        dispatch(load(cards));
    }
    return cards;
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
export const editCard = (payload) => async (dispatch) => {
    const response = await fetch(`/api/cards/${payload.cardId}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

    const card = await response.json();
    if (response.ok) {
        dispatch(addOneCard(card));
    }
    return card;
}


export const deleteCard = (payload) => async (dispatch) => {
    const getCurrCard = await fetch(`/api/cards/${payload.card_id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (getCurrCard.ok) {
        const delCard = await fetch(`/api/cards/${payload.card_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'DELETE',
                body: JSON.stringify(payload)
            });
        if (delCard.ok) {
            const card = await getCurrCard.json();
            dispatch(deleteOneCard(card));
            return card;
        }
        else return delCard.json();
    }
    else return getCurrCard.json();
}

const cardsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            const allCards = {};
            action.cards.forEach((card) => {
                allCards[card.id] = card;
            });
            return { ...allCards }
        }
        case ADD_CARD: {
            const newCard = { ...state };
            newCard[action.card.id] = action.card
            return newCard
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
