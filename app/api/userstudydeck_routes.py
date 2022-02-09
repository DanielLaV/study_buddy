from flask import Blueprint, request
from app.models import UserStudyDeck, Deck, db
from flask_login import login_required

userstudydeck_routes = Blueprint('user-study-decks', __name__)


# ERROR HANDLING
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@userstudydeck_routes.route('<int:user_id>', methods=['GET'])
@login_required
def study_list(user_id):
    """
    return all of the user's decks in study list
    """
    study_decks = UserStudyDeck.query.filter(UserStudyDeck.user_id == user_id).join(Deck).all()

    return {"study_decks": [study_deck.to_dict() for study_deck in study_decks]}

@userstudydeck_routes.route('<int:user_id>', methods=['POST'])
@login_required
def add_to_study_list(user_id):
    """
    POST route to add a deck to the users study list
    """
    data = request.get_json()
    # create an instance of the table using the user id and deck id from data
    table = UserStudyDeck(user_id=user_id, deck_id=data['deck_id'])
    # query to make sure relationship does not exist
    query = UserStudyDeck.query.filter(
        UserStudyDeck.user_id == user_id,
        UserStudyDeck.deck_id == data['deck_id']
    ).all()
    if not query:
        db.session.add(table)
        db.session.commit()
        return table.to_dict()
    return {'error': 'Relationship already exists'}

@userstudydeck_routes.route('<int:deck_id>', methods=['DELETE'])
@login_required
def remove_from_study_list(deck_id):
    """
    DELETE route to remove a deck from the users study list
    """
    studyDeck = UserStudyDeck.query.get(deck_id)
    data = studyDeck.to_dict()
    db.session.delete(studyDeck)
    db.session.commit()
    return data
