from flask import Blueprint, jsonify, make_response, session, request
from app.models import Deck, db, user
from app.forms import LoginForm, DeckForm
from flask_login import current_user, login_user, logout_user, login_required

deck_routes = Blueprint('decks', __name__)

# ADD ERROR HANDLING
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@deck_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    GET requests return all decks
    POST requests create a new deck in the database
    """
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = request.get_json()
        # print('Data', data)

        new_deck = Deck(title=data['title'], description=data['description'], user_id=data['user_id'])
        # print('='*20, 'New Deck is ', new_deck.to_dict())
        db.session.add(new_deck)
        db.session.commit()
        return new_deck.to_dict()
    if form.errors:
        return form.errors

    decks = Deck.query.all()
    return {"decks": [deck.to_dict() for deck in decks]}


@deck_routes.route('/<int:id>', methods=['GET', 'PUT'])
def single_deck(id):
    """
    GET requests retrieve one deck
    PUT requests edit the deck
    POST
    """
    deck = Deck.query.get(id)
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        print("="*20, "in the edit backend")
        data = request.get_json()
        title = form.data["title"]
        description = form.data["description"]
        user_id = data["user_id"]
        deck.title = title
        deck.description = description
        deck.user_id = user_id
        print('DECK IS ', deck.to_dict())
        print(data, title, description, user_id)
        db.session.add(deck)
        db.session.commit()
    if form.errors:
        return form.errors
    return deck.to_dict()


@deck_routes.route('/<int:id>', methods=['DELETE'])
def delete_deck(id):
    """
    DELETE requests delete the deck from the database
    """
    try:
        deck = Deck.query.get(id)
        db.session.delete(deck)
        db.session.commit()
        return
    except:
        res = make_response(404, error="Deck not found!")
        return res
