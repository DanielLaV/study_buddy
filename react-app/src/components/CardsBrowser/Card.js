function Card({ card }) {
    return (
        <div className="singleDeck">
            <h2 className='deckTitle'>{card.front}</h2>
        </div>
    )
}

export default Card;
