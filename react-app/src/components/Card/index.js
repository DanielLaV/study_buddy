function Card({ card }) {
    return (
        <div>
            <h2 className='deckTitle'>{card.front}</h2>
        </div>
    )
}

export default Card;
