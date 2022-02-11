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
    tdd = Tag(
        name='TDD', deck_id=10)
    testing = Tag(
        name='testing', deck_id=10)
    recursion = Tag(
        name='recursion', deck_id=11)
    bullets2 = Tag(
        name='pewpew', deck_id=11)
    functions = Tag(
        name='functions', deck_id=12)
    immediate = Tag(
        name='immediate', deck_id=12)
    asyncJs = Tag(
        name='async', deck_id=13)
    js5 = Tag(
        name='js', deck_id=13)
    bigO = Tag(
        name='big-o', deck_id=14)
    timeComplexity = Tag(
        name='time complexity', deck_id=14)
    sorting = Tag(
        name='sorting', deck_id=15)
    algo = Tag(
        name='algorithm', deck_id=15)
    trees = Tag(
        name='trees', deck_id=16)
    dataStructures = Tag(
        name='data structures', deck_id=16)
    graphs = Tag(
        name='graphs', deck_id=17)
    dataStructures2 = Tag(
        name='data structures', deck_id=17)
    html = Tag(
        name='HTML', deck_id=18)
    hyper = Tag(
        name='hyper', deck_id=18)
    api = Tag(
        name='API', deck_id=19)
    rest = Tag(
        name='REST', deck_id=19)
    promises = Tag(
        name='promises', deck_id=20)
    functions2 = Tag(
        name='functions', deck_id=20)
    dom = Tag(
        name='DOM', deck_id=21)
    manipulation = Tag(
        name='manipulation', deck_id=21)
    events = Tag(
        name='events', deck_id=22)
    event = Tag(
        name='event', deck_id=22)
    storage = Tag(
        name='storage', deck_id=23)
    cookie = Tag(
        name='cookie', deck_id=23)
    sql = Tag(
        name='sql', deck_id=24)
    databases = Tag(
        name='databases', deck_id=24)
    regex = Tag(
        name='regex', deck_id=25)
    regular = Tag(
        name='regular expression', deck_id=25)
    express = Tag(
        name='express', deck_id=26)
    node = Tag(
        name='node', deck_id=26)
    pug = Tag(
        name='pug', deck_id=27)
    urgh = Tag(
        name='urgh', deck_id=27)

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
    db.session.add(tdd)
    db.session.add(testing)
    db.session.add(recursion)
    db.session.add(bullets2)
    db.session.add(functions)
    db.session.add(immediate)
    db.session.add(asyncJs)
    db.session.add(js5)
    db.session.add(bigO)
    db.session.add(timeComplexity)
    db.session.add(sorting)
    db.session.add(algo)
    db.session.add(trees)
    db.session.add(dataStructures)
    db.session.add(graphs)
    db.session.add(dataStructures2)
    db.session.add(html)
    db.session.add(hyper)
    db.session.add(api)
    db.session.add(rest)
    db.session.add(promises)
    db.session.add(functions2)
    db.session.add(manipulation)
    db.session.add(events)
    db.session.add(event)
    db.session.add(storage)
    db.session.add(cookie)
    db.session.add(sql)
    db.session.add(databases)
    db.session.add(regex)
    db.session.add(regular)
    db.session.add(express)
    db.session.add(node)
    db.session.add(pug)
    db.session.add(urgh)

    db.session.commit()



def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
