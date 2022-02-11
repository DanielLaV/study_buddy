from flask import Blueprint, session, request, make_response
from app.models import db, Deck, Card

search_routes = Blueprint('search', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


@search_routes.route('/<string:query>', methods=['GET'])
def main(query):
    """
    'GET' searches the Card and Deck database .
    The function returns all tags associated with that deck.
    """
    print("string route?")
    if 16 < len(query) < 2:
         return {"errors": "Query must be between 2 and 16 characters long"}, 401
    else:
        # deck results: querying title and description
        try:
            deck_title_results = Deck.query.filter(Deck.title.ilike(f"%{query}%")).all()
            deck_title_results = [deck.to_dict() for deck in deck_title_results]
        except:
            pass
        try:
            deck_desc_results = Deck.query.filter(Deck.description.ilike(f"%{query}%")).all()
            deck_desc_results = [deck.to_dict() for deck in deck_desc_results]
        except:
            pass
        # card results: querying front and back
        try:
            card_front_results = Card.query.filter(Card.front.ilike(f"%{query}%")).all()
            card_front_results = [card.to_dict() for card in card_front_results]
        except:
            pass
        try:
            card_back_results = Card.query.filter(Card.back.ilike(f"%{query}%")).all()
            card_back_results = [card.to_dict() for card in card_back_results]
        except:
            pass
        all_deck_results = deck_title_results + deck_desc_results
        all_card_results = card_front_results + card_back_results
        if (all_deck_results or all_card_results):
            print("all deck results", all_deck_results)
            print("all card results", all_card_results)
            return {"decks": all_deck_results, "cards": all_card_results}, 200
        else:
            return {"errors": ["No results found!"]}, 401

# @search_routes.route('/<int:query>', methods=['GET'])
# def int(query):
#     """
#     'GET' searches the Card and Deck database .
#     The function returns all tags associated with that deck.
#     """
#     if 16 < len(query) < 2:
#          return {"errors": "Query must be between 2 and 16 characters long"}, 401
#     else:
#         # deck results: querying title and description
#         try:
#             deck_title_results = Deck.query.filter(Deck.title.ilike(f"%{query}%")).all()
#             deck_title_results = [deck.to_dict() for deck in deck_title_results]
#         except:
#             pass
#         try:
#             deck_desc_results = Deck.query.filter(Deck.description.ilike(f"%{query}%")).all()
#             deck_desc_results = [deck.to_dict() for deck in deck_desc_results]
#         except:
#             pass
#         # card results: querying front and back
#         try:
#             card_front_results = Card.query.filter(Card.front.ilike(f"%{query}%")).all()
#             card_front_results = [card.to_dict() for card in card_front_results]
#         except:
#             pass
#         try:
#             card_back_results = Card.query.filter(Card.back.ilike(f"%{query}%")).all()
#             card_back_results = [card.to_dict() for card in card_back_results]
#         except:
#             pass
#         all_deck_results = deck_title_results + deck_desc_results
#         all_card_results = card_front_results + card_back_results
#         if (all_deck_results or all_card_results):
#             return {"decks": all_deck_results, "cards": all_card_results}
#         else:
#             print("no results)")
#             return {"errors": "No results found!"}, 404
