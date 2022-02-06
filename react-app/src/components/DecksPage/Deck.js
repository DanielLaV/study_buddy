import './DecksPage.css'

function Deck({ deck, userId = null }) {
    return (
        <div className="singleDeck">
            <h2 className='deckTitle'>{deck.title}</h2>
            <p className='deckDesc'>{deck.description}</p>
        </div>
    )
}

export default Deck;
