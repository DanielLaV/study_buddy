from app.models import db, Card



def seed_cards():
    thunk = Card(
        front='Define a thunk', back="Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.", deck_id=1)
    thunk2 = Card(
        front='Where should a thunk be used?', back='REDUX', deck_id=1)
    memo = Card(
        front='Define memoization', back='Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.', deck_id=2)
    origin = Card(
        front='What is the etymology of the term "memoization"?', back='The term "memoization" was coined by Donald Michie in 1968 and is derived from the Latin word "memorandum" ("to be remembered"), usually truncated as "memo" in American English, and thus carries the meaning of "turning [the results of] a function into something to be remembered".', deck_id=2)
    oop = Card(
        front='What is Object Oriented Programming', back='Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).', deck_id=3)
    inheritance = Card(
        front='What is inheritance in OOP?', back='In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation. Also defined as deriving new classes (sub classes) from existing ones such as super class or base class and then forming them into a hierarchy of classes. ', deck_id=3)
    components = Card(
        front='React breaks down a webpage into these types of units', back='Components', deck_id=4)
    dom = Card(
        front='When does React re-render a part of a webpage?', back='When the virtual DOM is different from the DOM', deck_id=4)
    data = Card(
        front='List 7 data types and data structures in Javascript', back='Array, Set, Object(POJO), Boolean, Null, Undefined, Number, BigInt, String, Symbol, Maps', deck_id=5)
    nada = Card(
        front='Which primitive data type does Javascript use for nothing', back='Null', deck_id=5)
    sort = Card(
        front='What is the space and time complexity of Array.sort?', back='For arrays containing 10 or fewer elements, time complexity of .sort is O(n^2), and space complexity is O(1). For longer arrays time complexity is Θ(n log(n)) (average case), and space complexity is O(log(n))', deck_id=6)
    arrays = Card(
        front='Name 7 Array methods', back='Array.concat, Array.copyWithin, Array.entries, Array.every, Array.fill, Array.filter, Array.find, Array.findIndex, Array.flat, Array.forEach, Array.includes, Array.indexOf, Array.join, Array.keys, Array.map, Array.pop, Array.push, Array.reduce, Array.reverse, Array.shift, Array.slice, Array.some, Array.sort, Array.splice and more! \nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods', deck_id=6)
    list = Card(
        front='For simple functions on lists, what syntax should be used?', back='List Comprehension', deck_id=7)
    concat = Card(
        front='How would you join two lists together?', back='newList = list1 + list2\nfor x in list2:\n\tlist1.append(x)\nlist1.extend(list2)', deck_id=7)
    init = Card(
        front='What command should be run in the CLI to create an empty project?', back='npx sequelize-cli init', deck_id=8)
    migrate = Card(
        front='How should migrations be run and undone?', back='npx sequelize-cli db:migrate\nnpx sequelize-cli db:migrate:undo', deck_id=8)
    pew = Card(
        front='Which property and value should be set on an unordered list to remove the bullet points of the list?', back='list-style: none', deck_id=9)
    keyframe = Card(
        front='Which CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles waypoints along the animation sequence.', back='@keyframes', deck_id=9)


    db.session.add(thunk)
    db.session.add(thunk2)
    db.session.add(memo)
    db.session.add(origin)
    db.session.add(oop)
    db.session.add(inheritance)
    db.session.add(components)
    db.session.add(dom)
    db.session.add(data)
    db.session.add(nada)
    db.session.add(sort)
    db.session.add(arrays)
    db.session.add(list)
    db.session.add(concat)
    db.session.add(init)
    db.session.add(migrate)
    db.session.add(pew)
    db.session.add(keyframe)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
