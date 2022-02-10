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
            deck_title_results = Deck.query.filter(Deck.title.ilike(f"%{query}%")).all()
            deck_title_results = [deck.to_dict() for deck in deck_title_results]
            print("deck_title", deck_title_results)
        except:
            pass
        try:
            deck_desc_results = Deck.query.filter(Deck.description.ilike(f"%{query}%")).all()
            deck_desc_results = [deck.to_dict() for deck in deck_desc_results]
            print("deck_desc", deck_desc_results)
        except:
            pass
        try:
            card_front_results = Card.query.filter(Card.front.ilike(f"%{query}%")).all()
            card_front_results = [card.to_dict() for card in card_front_results]
        except:
            pass
        try:
            card_back_results = Card.query.filter(Card.back.ilike(f"%{query}%")).all()
            card_back_results = [card.to_dict() for card in card_back_results]
        except:
            pass
        set_deck_results = set(deck_title_results, deck_desc_results)
        set_card_results = set(card_front_results, card_back_results)
        if (set_deck_results or set_card_results):
            return {"decks": {key: value for key, value in set_deck_results}, "cards": {key: value for key, value in set_card_results}}
        else:
            return {"errors": "No results found!"}, 404
    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {}, 200
