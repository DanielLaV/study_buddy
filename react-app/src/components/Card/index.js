import './card.css'


function Card({ card }) {


    if (card) {
        return (
            <div className="frontCardDisplay">
                <p className='deckTitle'>{card.front}</p>
            </div>
        )
    }
}

export default Card;
