from flask import Blueprint, jsonify, session, request
from app.models import UserStudyDeck, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

userstudydeck_routes = Blueprint('user-study-deck', __name__)

@userstudydeck_routes.route('/', methods=['GET'])
def main():
    """
    insert function description
    """
    return "you are in /api/tags!"
