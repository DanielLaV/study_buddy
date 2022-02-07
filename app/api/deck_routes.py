from flask import Blueprint, jsonify, session, request
from app.models import Deck, db
from app.forms import LoginForm
from app.forms.deck_form import DeckForm
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
