from flask import Blueprint, session, request, make_response
from app.models import Deck, Card, Tag, db
from app.forms import DeckForm, CardForm, DeleteDeckForm

deck_routes = Blueprint('decks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field.capitalize()} : {error}')
    return errorMessages


@deck_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    GET requests return all decks
    POST requests create a new deck in the database
    """

    if request.method == 'POST':
        form = DeckForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            title = form.data['title']
            description = form.data['description']
            user_id = form.data['user_id']

            new_deck = Deck(title=title, description=description, user_id=user_id)

            db.session.add(new_deck)
            db.session.commit()
            return new_deck.to_dict()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    elif request.method == 'GET':
        decks = Deck.query.all()
        return {"decks": [deck.to_dict() for deck in decks]}

@deck_routes.route('/<int:id>/cards/')
def deck_cards(id):
    """
    GET requests return all cards associated with a specific deck.
    """
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form['csrf_token'].data:
        deck_cards = Card.query.filter(Card.deck_id == id).all()
        return {"cards": [card.to_dict() for card in deck_cards]}
    if form.errors:
        return form.errors
    return make_response(404)

@deck_routes.route('/<int:id>', methods=['GET', 'PUT'])
def single_deck(id):
    """
    GET requests retrieve one deck
    PUT requests edit the deck
    POST
    """
    deck = Deck.query.get(id)
    if request.method == "PUT":
        form = DeckForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            data = request.get_json()
            title = form.data["title"]
            description = form.data["description"]
            user_id = data["user_id"]
            deck.title = title
            deck.description = description
            deck.user_id = user_id
            db.session.add(deck)
            db.session.commit()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return deck.to_dict()


@deck_routes.route('/<int:id>', methods=['DELETE'])
def delete_deck(id):
    """
    DELETE requests delete the deck from the database
    """
    form = DeleteDeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck.query.get(id)
        db.session.delete(deck)
        db.session.commit()
        return deck.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@deck_routes.route('/<int:id>/tags/', methods=['GET'])
def get_deck_tags(id):
    """
    GET requests to retrieve tags on a specific deck
    """
    tags = Tag.query.filter(Tag.deck_id == id).all()
    return {"tags": [tag.to_dict() for tag in tags]}
