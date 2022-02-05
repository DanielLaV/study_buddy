from app.models import db, Tag



def seed_tags():
    js = Tag(
        name='js', deck_id=1)
    redux = Tag(
        name='redux', deck_id=1)
    oop = Tag(
        name='oop', deck_id=2)
    memo = Tag(
        name='memoization', deck_id=2)
    oops = Tag(
        name='oop', deck_id=3)
    inheritance = Tag(
        name='inheritance', deck_id=3)
    react = Tag(
        name='react', deck_id=4)
    js2 = Tag(
        name='js', deck_id=4)
    data = Tag(
         name='data types', deck_id=5)
    js3 = Tag(
         name='js', deck_id=5)
    arr = Tag(
         name='arrays', deck_id=6)
    js4 = Tag(
         name='js', deck_id=6)
    py = Tag(
         name='python', deck_id=7)
    lists = Tag(
         name='lists', deck_id=7)
    sqlz = Tag(
         name='sequelize', deck_id=8)
    cli = Tag(
         name='cli', deck_id=8)
    bullets = Tag(
         name='pewpew', deck_id=9)
    css = Tag(
        name='CSS', deck_id=9)

    db.session.add(js)
    db.session.add(js2)
    db.session.add(js3)
    db.session.add(js4)
    db.session.add(oop)
    db.session.add(css)
    db.session.add(memo)
    db.session.add(react)
    db.session.add(redux)
    db.session.add(oops)
    db.session.add(inheritance)
    db.session.add(data)
    db.session.add(arr)
    db.session.add(py)
    db.session.add(lists)
    db.session.add(sqlz)
    db.session.add(cli)
    db.session.add(bullets)

    db.session.commit()



def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
