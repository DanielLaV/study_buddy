const LOAD = "studybuddy/search/LOAD"

const load = results => ({
    type: LOAD,
    results
});

export const getResults = (query) => async (dispatch) => {
    const response = await fetch(`/api/search/${query}`, {
        headers: { "Content-Type": "application/json" }
    });
    const results = await response.json();
    console.log("results", results)
    if (response.ok) {
        dispatch(load(results))
    }
    return results
}

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            const decks = {}
            action.results.decks.forEach((deck) => {
                decks[deck.id] = deck
            })
            const cards = {}
            action.results.cards.forEach((card) => {
                cards[card.id] = card
            })
            return {decks, cards}
        }
        default: return state;
    }
}

export default searchReducer
