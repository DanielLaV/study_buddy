from urllib import response
from flask import Blueprint, jsonify, session, request, make_response
from app.models import Card, db
from app.forms import CardForm, DeleteCardForm
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
            errorMessages.append(f'{error}')
    return errorMessages


@card_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    For 'GET' requests, this function returns all cards.
    For 'POST' requests, this function validates the incoming data from the frontend
    and creates a card. The created card data are returned in JSON format.
    """
    if request.method == 'POST':
        print("post route post route post route")
        form = CardForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            front = form.data['front']
            back = form.data['back']
            deck_id = form.data['deck_id']
            new_card = Card(front=front, back=back, deck_id=deck_id)
            db.session.add(new_card)
            db.session.commit()
        elif form.errors:
            print("form.errors", form.errors)
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    if request.method == 'GET':
        cards = Card.query.all()
        return {"cards": [card.to_dict() for card in cards]}
    return new_card.to_dict()

@card_routes.route('/<int:id>', methods=['GET', 'PUT'])
def one_card(id):
    """
    Retrieves a card with id of `:id`. For 'GET' requests, this function returns the card.
    For 'PUT' requests, this function validates the incoming data from the frontend
    and updates the appropriate card. For both types of requests, the most recent card
    data are returned in JSON format.
    """
    one_card = Card.query.get(id)
    if request.method == 'PUT':
        form = CardForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            deck_id = form.data["deck_id"]
            front = form.data['front']
            back = form.data['back']
            one_card.front = front
            one_card.back = back
            one_card.deck_id = deck_id
            db.session.add(one_card)
            db.session.commit()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return one_card.to_dict()

@card_routes.route('/<int:id>', methods=['DELETE'])
def delete_card(id):
    """
    Retrieves a card with id of `:id` then deletes it from the database.
    Returns response status 200 if the card was deleted.
    Return response status 404 if the card wasn't found.
    """
    form = DeleteCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # try:
            one_card = Card.query.get(id)
            db.session.delete(one_card)
            db.session.commit()
            return 200
        # except:
        #     return {'errors': ["Card not found!"]}, 404
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
