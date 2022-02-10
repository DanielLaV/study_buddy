from flask import Blueprint, session, request, make_response
from app.models import Tag, db, Deck
from app.forms import TagForm, DeleteTagForm

tag_routes = Blueprint('tags', __name__)

@tag_routes.route('/', methods=['POST'])
def main():
    """
    'POST' makes a new tag and associates it with a specific deck_id.
    The function returns all tags associated with that deck.
    """
    form = TagForm()
    data = request.get_json()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        names = data['names'].split(", ")
        deck_id = data['deck_id']
        response = {}
        for name in names:
            new_tag = Tag(name=name, deck_id=deck_id)
            db.session.add(new_tag)
            db.session.commit()
            response[new_tag.id] = name
        return response
    if form.errors:
        print(form.errors)
    deck_tags = Tag.query.filter(Tag.deck_id == deck_id).all()
    return {"tags": [tag.to_dict() for tag in deck_tags]}

@tag_routes.route('/<int:id>', methods=['GET', 'DELETE'])
def one_tag(id):
    """
    'GET' retrieves all decks with tags similar to tag with pk id.
    Returns decks with tag names similar to the tag with pk id.

    'DELETE' deletes the tag with pk id. Returns a status of 200.
    """
    form = DeleteTagForm()
    if request.method == 'DELETE':
        form.data = request.get_json()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            try:
                tag = Tag.query.get(id)
                db.session.delete(tag)
                db.session.commit()
                return make_response(200)
            except:
                response = make_response(404, error="Tag not found!")
                return response
        if form.errors:
            return form.errors
    if request.method == 'GET':
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            print("if conditional)")
            tag = Tag.query.get(id)
            decks_with_tag = Tag.query.filter(Tag.name.ilike(tag.name)).join(Deck).all()
            print("decks_with_tag", decks_with_tag)
            return {"decks": [deck.to_dict() for deck in decks_with_tag]}
        if form.errors:
            return form.errors
        tag = Tag.query.get(id)
        print(tag.to_dict())
        return tag.to_dict()
