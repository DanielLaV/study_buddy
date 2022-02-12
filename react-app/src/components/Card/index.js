import './card.css'
import EditCardFormModal from '../EditCardFormModal';
import DeleteCardFormModal from '../DeleteCardFormModal';


function Card({ card }) {


    if (card) {
        const isOwner = card.deck_id;
        // let displayTags = allTags.map(tag => <Tags tag={tag} isOwner={isOwner}/>)


        return (
            <div className="frontCardDisplay">
                {card.front}
            </div>
        )
    }
}

export default Card;
