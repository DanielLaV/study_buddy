from app.models import db, Deck


# Adds demo decks, you can add other decks here if you want
def seed_decks():
    thunks = Deck(
        title='Thunks', description='Taking a look at React thunks', user_id=1)
    memo = Deck(
        title='Memoization', description='No one knows what it is', user_id=1)
    oop = Deck(
        title='Object Oriented Programming', description='The basics of OOP', user_id=1)
    react = Deck(
        title='React', description='Proper React Protocol', user_id=2)
    data_types = Deck(
        title='Data Types', description='What data types does JS have?', user_id=2)
    arrays = Deck(
        title='Arrays in JS', description='What is an array?', user_id=2)
    lists = Deck(
        title='Lists', description='Why would we change the name of arrays?', user_id=3)
    sequelize = Deck(
        title='Sequelize', description='The ins and the outs', user_id=3)
    css = Deck(
        title='Cascading Style Sheets', description='Good luck moving an object', user_id=3)

    db.session.add(thunks)
    db.session.add(memo)
    db.session.add(oop)
    db.session.add(react)
    db.session.add(data_types)
    db.session.add(arrays)
    db.session.add(lists)
    db.session.add(sequelize)
    db.session.add(css)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the decks table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
