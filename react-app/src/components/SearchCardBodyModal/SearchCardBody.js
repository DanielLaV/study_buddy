import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SearchCardBody = ({ setShowModal, cardId }) => {
	const history = useHistory();
	const card = useSelector((state) => state.search.cards[cardId]);
	const deckId = card?.deck_id

	const buttonDiv = (
		<div className="buttons">
			<button type="button" onClick={(e) => setShowModal(false)} className="form-button">
				Close
			</button>
			<button type="button" onClick={(e) => history.push(`/decks/${deckId}`)} className="form-button">
				Go to Deck
			</button>
		</div>
	);

	return (
		<div className="preview">
			<div className="form-container">
				<p className="side">Front:</p>
				<div>
					<div className="preview-text">
						<div className="texter">{card.front}</div>
					</div>
				</div>
				<p className="side">Back:</p>
				<div>
					<div className="preview-text">
						<div className="texter">{card.back}</div>
					</div>
				</div>
			</div>
			<div className="form-button-container">{buttonDiv}</div>
		</div>
	);
};

export default SearchCardBody;
