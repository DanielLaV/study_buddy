from app.models import db, UserStudyDeck


# Adds a demo user, you can add other users here if you want
def seed_user_study_decks():
    demo_study_deck1 = UserStudyDeck(
        user_id=1, deck_id=1, toStudy=True)
    demo_study_deck2 = UserStudyDeck(
        user_id=1, deck_id=2, toStudy=True)
    marnie_study_deck1 = UserStudyDeck(
        user_id=2, deck_id=3, toStudy=True)
    marnie_study_decks2 = UserStudyDeck(
        user_id=2, deck_id=4, toStudy=True)
    bobbie_study_deck1 = UserStudyDeck(
        user_id=3, deck_id=5, toStudy=True)
    bobbie_study_deck2 = UserStudyDeck(
        user_id=3, deck_id=6, toStudy=True)



    db.session.add(demo_study_deck1)
    db.session.add(demo_study_deck2)

    db.session.add(marnie_study_deck1)
    db.session.add(marnie_study_deck2)

    db.session.add(bobbie_study_deck1)
    db.session.add(bobbie_study_deck2)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_user_study_decks():
    db.session.execute('TRUNCATE user_study_decks RESTART IDENTITY CASCADE;')
    db.session.commit()
