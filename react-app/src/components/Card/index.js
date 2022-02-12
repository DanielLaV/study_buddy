import './card.css'


function Card({ card }) {


    if (card) {
        return (
            <div className="frontCardDisplay">
                {card.front}
            </div>
        )
    }
}

export default Card;
