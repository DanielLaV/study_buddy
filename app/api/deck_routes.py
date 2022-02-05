from flask import Blueprint, jsonify, session, request
from app.models import Deck, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

deck_routes = Blueprint('decks', __name__)

@deck_routes.route('/', methods=['GET'])
def main():
    """
    insert function description
    """
    return "you are in /api/decks!"
