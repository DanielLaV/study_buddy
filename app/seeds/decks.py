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
        title='Sequelize', description='The ins and the outs of connecting express to sql', user_id=3)
    css = Deck(
        title='Cascading Style Sheets', description='Good luck moving an object', user_id=3)
    tdd = Deck(
        title='Test Driven Development', description='Always test your code', user_id=1)
    recursion = Deck(
        title='Recursion', description='Functions calling themselves over and over and over...', user_id=1)
    iifes = Deck(
        title='IIFEs', description='Function expressions that are immediately invoked', user_id=1)
    asyncjs = Deck(
        title='Async JS ', description='Everything you need to know about using async functions in JS', user_id=2)
    bigO = Deck(
        title='Big-O Notation', description='How to use and understand Big-O notation', user_id=2)
    sorting = Deck(
        title='Sorting', description='Sorting algorithms', user_id=2)
    trees = Deck(
        title='Trees', description='Not the trees you climb. Tree algorithms', user_id=3)
    graphs = Deck(
        title='Graphs', description='Understanding graphing algorithms in JS', user_id=3)
    html = Deck(
        title='HTML', description='Used to make great Myspace profile pages', user_id=3)
    apis = Deck(
        title='APIs', description='Practice RESTFUL APIs with express', user_id=1)
    promises = Deck(
        title='Promises', description='You may return the value in the future', user_id=1)
    domManipulation = Deck(
        title='DOM Manipulation', description='Becoming a master at manipulating the DOM', user_id=1)
    events = Deck(
        title='Events', description='What is an event and how to handle it', user_id=2)
    storage = Deck(
        title='Storage', description='All kinds of storage', user_id=2)
    sql = Deck(
        title='SQL', description='How to communicate with the sql database', user_id=2)
    regex = Deck(
        title='RegEx', description='Become a RegEx master', user_id=3)
    express = Deck(
        title='Express', description='Mastering Express.js basics', user_id=3)
    pug = Deck(
        title='Pug', description='Best HTML templating engine ever', user_id=3)


    db.session.add(thunks)
    db.session.add(memo)
    db.session.add(oop)
    db.session.add(react)
    db.session.add(data_types)
    db.session.add(arrays)
    db.session.add(lists)
    db.session.add(sequelize)
    db.session.add(css)
    db.session.add(tdd)
    db.session.add(recursion)
    db.session.add(iifes)
    db.session.add(asyncjs)
    db.session.add(bigO)
    db.session.add(sorting)
    db.session.add(trees)
    db.session.add(graphs)
    db.session.add(html)
    db.session.add(apis)
    db.session.add(promises)
    db.session.add(domManipulation)
    db.session.add(events)
    db.session.add(storage)
    db.session.add(sql)
    db.session.add(regex)
    db.session.add(express)
    db.session.add(pug)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the decks table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
