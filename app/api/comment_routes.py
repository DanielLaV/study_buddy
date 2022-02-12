from flask import Blueprint
from app.models import Comment, db


comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['GET'])
def main():
    """
    insert function description
    """
    return "you are in /api/comments!"
