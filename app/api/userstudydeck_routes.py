from flask import Blueprint, request, make_response
from app.models import UserStudyDeck, Deck, db
from flask_login import login_required, current_user

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
    print('this is user_id---------------------------------------------------', user_id)
    print('this is session.user------------------------------------------------', current_user.id)
    if current_user.id == user_id:
        study_decks = UserStudyDeck.query.filter(UserStudyDeck.user_id == user_id).join(Deck).all()
        return {"study_decks": [study_deck.to_dict() for study_deck in study_decks]}
    else:
        return 'not today'


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


@userstudydeck_routes.route('<int:user_id>', methods=['DELETE'])
@login_required
def remove_from_study_list(user_id):
    """
    DELETE route to remove a deck from the users study list
    """
    data = request.get_json()
    study_deck = UserStudyDeck.query.filter(UserStudyDeck.user_id == data['user_id'], UserStudyDeck.deck_id == data['deck_id']).first()
    db.session.delete(study_deck)
    db.session.commit()
    return {"id":study_deck.id}
