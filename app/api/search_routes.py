from flask import Blueprint, session, request, make_response
from app.models import db, Deck, Card
from app.forms import SearchForm

search_routes = Blueprint('search', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@search_routes.route('/', methods=['POST'])
def main():
    """
    'POST' searches the Card and Deck database .
    The function returns all tags associated with that deck.
    """
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        query = form.data['query']
        # deck results:  querying title and description
        try:
            deck_title_results = {[deck.to_dict() for deck in Deck.query.filter(Deck.title.ilike(f"%{query}%")).all]}
            deck_title_results = [deck.to_dict() for deck in deck_title_results]
            ("deck_title_many", deck_title_results)
        except:
            deck_title_results = Deck.query.filter(Deck.title.ilike(f"%{query}%")).all()
            deck_title_results = [deck.to_dict() for deck in deck_title_results]
            print("deck_one?", deck_title_results)
            # deck_title_results =
        try:
            deck_desc_results = {[deck.to_dict() for deck in Deck.query.filter(Deck.description.ilike(f"%{query}%")).all]}
        except:
            deck_desc_one_result = Deck.query.filter(Deck.description.ilike(f"%{query}%")).all()
            print("deck_one_desc?", deck_desc_one_result)
        # try:
        #     card_front_results = {[card.to_dict() for card in Card.query.filter(Card.front.ilike(f"%{query}%")).all]}
        # except:
        #     card_front_one_result = Card.query.filter(Card.front.ilike(f"%{query}%")).all()
        #     print("front_one?", card_front_one_result)
        # try:
        #     card_back_results = {[card.to_dict() for card in Card.query.filter(Card.back.ilike(f"%{query}%")).all]}
        # except:
        #     card_back_one_result = Card.query.filter(Card.back.ilike(f"%{query}%")).all()
        # set_deck_results = set([deck.to_dict() for card in cards]deck_title_results, deck_desc_results)
        # card_front_results = {[card.to_dict() for card in Card.query.filter(Card.front.ilike(query)).all]}
        # card_back_results = {[card.to_dict() for card in Card.query.filter(Card.back.ilike(query)).all]}
        # set_card_results = set(card_front_results, card_back_results)
        # return {"decks": {key: value for key, value in set_deck_results}, "cards": {key: value for key, value in set_card_results}}
    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {}, 200
