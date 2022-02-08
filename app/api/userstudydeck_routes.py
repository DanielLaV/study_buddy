from flask import Blueprint, jsonify, session, request
from app.models import UserStudyDeck, db
from app.forms import LoginForm, SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

userstudydeck_routes = Blueprint('user-study-decks', __name__)

@userstudydeck_routes.route('<int:userId>', methods=['GET'])
@login_required
def study_list(userId):
    """
    return all of the user's decks in study list
    """
    study_decks = UserStudyDeck.query.filter(UserStudyDeck.user_id == userId).join(Deck).all()

    return {"study_decks": [study_deck.to_dict() for study_deck in study_decks]}
