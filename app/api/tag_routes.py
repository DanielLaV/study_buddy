from flask import Blueprint, session, request, make_response
from app.models import Tag, db, Deck
from app.forms import TagForm, DeleteTagForm

tag_routes = Blueprint('tags', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@tag_routes.route('/', methods=['POST'])
def main():
    """
    'POST' makes a new tag and associates it with a specific deck_id.
    The function returns all tags associated with that deck.
    """
    form = TagForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        names = form.data['names'].split(", ")
        deck_id = form.data['deck_id']

        response = {}
        for name in names:
            new_tag = Tag(name=name, deck_id=deck_id)
            db.session.add(new_tag)
            db.session.commit()
            response[new_tag.id] = new_tag.to_dict()
        return response
    elif form.errors:
        print("form.errors", form.errors)
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@tag_routes.route('/<int:id>', methods=['GET', 'DELETE'])
def one_tag(id):
    """
    'GET' retrieves all decks with tags similar to tag with pk id.
    Returns decks with tag names similar to the tag with pk id.

    'DELETE' deletes the tag with pk id. Returns a status of 200.
    """

    if request.method == 'DELETE':
        form = DeleteTagForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            tag = Tag.query.get(id)
            db.session.delete(tag)
            db.session.commit()
            return {}, 200
        else:
            print({'errors': validation_errors_to_error_messages(form.errors)})
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    if request.method == 'GET':
        try:
            tag = Tag.query.get(id)
            decks_with_tag = Tag.query.filter(Tag.name.ilike(tag.name)).join(Deck).all()
            return {"decks": [deck.to_dict() for deck in decks_with_tag]}
        except:
            tag = Tag.query.get(id)
            print(tag.to_dict())
            return tag.to_dict()


    #     form = DeleteTagForm()
    #     form.data = request.get_json()
    #     form['csrf_token'].data = request.cookies['csrf_token']
    #     if form.validate_on_submit():
    #         try:
    #             tag = Tag.query.get(id)
    #             db.session.delete(tag)
    #             db.session.commit()
    #             return make_response(200)
    #         except:
    #             response = make_response(404, error="Tag not found!")
    #             return response
    #     if form.errors:
    #         return form.errors
