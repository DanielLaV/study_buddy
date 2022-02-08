from flask import Blueprint, jsonify, session, request
from app.models import Comment, db
from app.forms import LoginForm, SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['GET'])
def main():
    """
    insert function description
    """
    return "you are in /api/comments!"
