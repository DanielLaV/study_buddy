from flask import Blueprint, jsonify, session, request, make_response
from app.models import Deck, Card, db
from app.forms import LoginForm, DeckForm, CardForm, card_form
from flask_login import current_user, login_user, logout_user, login_required

deck_routes = Blueprint('decks', __name__)

# ADD ERROR HANDLING

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

@deck_routes.route('/<int:id>/cards/')
def deck_cards(id):
    """
    GET requests return all cards associated with a specific deck.
    """
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form['csrf_token'].data:
        print("in the route")
        deck_cards = Card.query.filter(Card.deck_id == id).all()
        print({"cards": [card.to_dict() for card in deck_cards]})
        return {"cards": [card.to_dict() for card in deck_cards]}
    if form.errors:
        print("errors", form.errors)
        return form.errors
    return make_response(404)
