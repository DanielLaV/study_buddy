from flask import Blueprint
from app.models import UserStudyDeck, Deck
from flask_login import login_required

userstudydeck_routes = Blueprint('user-study-decks', __name__)

@userstudydeck_routes.route('<int:userId>', methods=['GET'])
@login_required
def study_list(userId):
    """
    return all of the user's decks in study list
    """
    study_decks = Deck.query.join(UserStudyDeck, Deck.id==UserStudyDeck.deck_id)\
        .add_columns(Deck.id,  UserStudyDeck.deck_id, UserStudyDeck.user_id)\
        .filter(Deck.id == UserStudyDeck.deck_id)\
        .filter(UserStudyDeck.user_id == userId).all()

    return {"study_decks": [study_deck[0].to_dict() for study_deck in study_decks]}
