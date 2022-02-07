from urllib import response
from flask import Blueprint, jsonify, session, request, make_response
from app.models import Card, db
from app.forms import CardForm
from flask_login import current_user, login_user, logout_user, login_required

card_routes = Blueprint('cards', __name__)

# CUSTOMIZE THESE
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@card_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    For 'GET' requests, this function returns all cards.
    For 'POST' requests, this function validates the incoming data from the frontend
    and creates a card. The created card data are returned in JSON format.
    """
    form = CardForm()
    data = request.get_json()
    deck_id = data["deck_id"]
    if form.validate_on_submit():
        front = form.data['front']
        back = form.data['back']
        deck_id = form.data['deck_id']
        new_card = Card(front=front, back=back, deck_id=deck_id)
        db.session.add(new_card)
        db.session.commit()
        return new_card
    if form.errors:
        return form.errors

    return "you are in /api/cards!"

@card_routes.route('/<int:id>', methods=['GET', 'PUT', 'POST'])
def one_card(id):
    """
    Retrieves a card with id of `:id`. For 'GET' requests, this function returns the card.
    For 'PUT' requests, this function validates the incoming data from the frontend
    and updates the appropriate card. For both types of requests, the most recent card
    data are returned in JSON format.
    """
    one_card = Card.query.get(id)
    form = CardForm()
    if form.validate_on_submit():
        data = request.get_json()
        deck_id = data["deck_id"]
        front = form.data['front']
        back = form.data['back']
        one_card.front = front
        one_card.back = back
        one_card.deck_id = deck_id
        db.session.add(one_card)
        db.session.commit()
    if form.errors:
        return form.errors
    return {"card": [one_card.to_dict() for card in one_card]}

@card_routes.route('/<int:id>', methods=['DELETE'])
def delete_card(id):
    """
    Retrieves a card with id of `:id` then deletes it from the database.
    Returns response status 200 if the card was deleted.
    Return response status 404 if the card wasn't found.
    """
    # use try... except block
    try:
        one_card = Card.query.get(id)
        db.session.delete(one_card)
        db.session.commit()
        return # reponse.status is ok, etc
    except:
        response = make_response(404, error="Card not found!")
        return response
