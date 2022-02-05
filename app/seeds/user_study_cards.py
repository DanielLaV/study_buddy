from app.models import db, UserStudyCard


# Adds a demo user, you can add other users here if you want
def seed_user_study_cards():
    demo_study_card1 = UserStudyCard(
        user_id=1, card_id=1, isCorrect=True)
    demo_study_card2 = UserStudyCard(
        user_id=1, card_id=2, isCorrect=False)
    marnie_study_card1 = UserStudyCard(
        user_id=2, card_id=3, isCorrect=False)
    marnie_study_card2 = UserStudyCard(
        user_id=2, card_id=4, isCorrect=True)
    bobbie_study_card1 = UserStudyCard(
        user_id=3, card_id=5, isCorrect=True)
    bobbie_study_card2 = UserStudyCard(
        user_id=3, card_id=6, isCorrect=False)




    db.session.add(demo_study_card1)
    db.session.add(demo_study_card2)

    db.session.add(marnie_study_card1)
    db.session.add(marnie_study_card2)

    db.session.add(bobbie_study_card1)
    db.session.add(bobbie_study_card2)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_user_study_cards():
    db.session.execute('TRUNCATE user_study_cards RESTART IDENTITY CASCADE;')
    db.session.commit()
