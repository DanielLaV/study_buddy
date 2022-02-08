from flask import Blueprint, jsonify, session, request
from app.models import UserStudyDeck, Deck
from flask_login import login_required

userstudydeck_routes = Blueprint('user-study-decks', __name__)

@userstudydeck_routes.route('<int:user_id>', methods=['GET'])
@login_required
def study_list(user_id):
    """
    return all of the user's decks in study list
    """
    study_decks = UserStudyDeck.query.filter(UserStudyDeck.user_id == user_id).join(Deck).all()

    return {"study_decks": [study_deck.to_dict() for study_deck in study_decks]}

@userstudydeck_routes.route('<int:deck_id>', methods=['POST'])
@login_required
def add_to_study_list(deck_id):
    """
    POST route to add a deck to the study list
    """
    return ''
