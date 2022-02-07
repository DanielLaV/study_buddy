from flask import Blueprint, jsonify, session, request
from app.models import Deck, db
from app.forms import LoginForm
from app.forms.deck_form import DeckForm
from flask_login import current_user, login_user, logout_user, login_required

deck_routes = Blueprint('decks', __name__)

# ADD ERROR HANDLING

@deck_routes.route('/', methods=['GET', 'POST'])
def main():
    """
    GET requests return all decks
    POST requests create a new deck in the database
    """
    form = DeckForm()

    if form.validate_on_submit():
        title = form.data["title"]
        description = form.data["description"]
        user_id = form.data["user_id"]
        new_deck = Deck(title=title, description=description, user_id=user_id)
        db.session.add(new_deck)
        db.session.commit()
        return new_deck
    if form.errors:
        return form.errors

    decks = Deck.query.all()
    return {"decks": [deck.to_dict() for deck in decks]}
