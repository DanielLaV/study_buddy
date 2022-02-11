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
    tdd= Card(
        front='Define test-driven development', back='Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.', deck_id=10)
    tdd2= Card(
        front='What are Mocha and Chai in relation to test-driven development?', back='Mocha is a testing framework. Chai is a library.', deck_id=10)
    rec= Card(
        front='Which is better: recursion or iteration?', back="This is a dumb question. \nIt's obviously recursion.", deck_id=11)
    rec2= Card(
        front="What will the following function return?\nconst helloWorld = () => {hello: 'world'};\nhelloWorld();", back='undefined\nYou may be asking yourself how this relates to recursion.', deck_id=11)
    iffy= Card(
        front="What the heck is an IIFE and how do we pronounce it?", back="It's pronounced 'iffy' and it is an Immediately Invoked Function Expression.\n", deck_id=12)
    iffy2= Card(
        front="What syntax does an IIFE have?", back="(function() {\n\tstatements;\n})();", deck_id=12)
    async1= Card(
        front="Is Javascript a single-threaded or multi-threaded language?", back="Single-threaded", deck_id=13)
    async2= Card(
        front="What order will the messages be printed in?\nfunction asyncy(cb) {\n\tsetTimeout(cb, 1000);\n}\n\nfunction greet() {\n\tconsole.log('Hello!');\n}\nasyncy(greet);", back="async\nHello!", deck_id=13)
    o= Card(
        front="Which of these describes types of growth in Big-O?\nA: Iterative, recursive, nested\nB: Linear, Constant, Quadratic\nC: Exponential, Constant Loops, Adjacent Loops", back="B", deck_id=14)
    o2= Card(
        front="What is Big-O?", back="The Big O (Japanese: THE ビッグオー, Hepburn: Za Biggu Ō) is a Japanese mecha-anime television series created by designer Keiichi Sato and director Kazuyoshi Katayama for Sunrise.", deck_id=14)
    sor= Card(
        front="What is the time complexity of a merge sort?", back="0(n log(n))", deck_id=15)
    sor2= Card(
        front="What is the best way to sort an array of Sets?", back="idk prolly use the .sort function", deck_id=15)
    tree= Card(
        front="What is an edge on a tree?", back="A pointer", deck_id=16)
    tree2= Card(
        front="What is a leaf node in a tree?", back="A node with no children", deck_id=16)
    tree4= Card(
        front="What are the steps for an in-order traversal on a tree?", back="1. Recursively call the left subtree\n2. Print the current node value\n3. Recursively call the right subtree", deck_id=16)
    tree3= Card(
        front="What are the steps for a breadth-first traversal of a tree?", back="1. Put the starting node in a queue\n2. While the queue is not empty, repeat steps 3-4\n3. Dequeue a node and print it\n4. Put all of the node's children in the back of the queue", deck_id=16)
    graph= Card(
        front="What are the steps for a breadth-first traversal of a graph?", back="1. Put the starting node in a queue\n2. Create a set to store visited nodes\n3. While the queue is not empty, repeat steps 4-6\n4. Dequeue a node and print it\n5. Do the thing that you need to do for the dequeued node\n6. For each unvisited neighbor, add it to the visited nodes and to the back of the queue", deck_id=17)
    graph2= Card(
        front="What is the weight of each edge in an unweighted graph?", back="1", deck_id=17)
    html1= Card(
        front="What is the header tag used for in HTML?", back="The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.", deck_id=18)
    html2= Card(
        front="What in the world is a section tag in HTML?", back="The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.", deck_id=18)
    api= Card(
        front="Does an API server or a traditional HTTP server have more functionality?", back="A! P! I!", deck_id=19)
    api2= Card(
        front="What is AJAX and what is it used for?", back="AJAX is a group of different technologies that work together to allow a website to communicate with a server in the background without requiring the website to reload in order to display new changes", deck_id=19)
    promise= Card(
        front="What is a Promise in Javascript?", back="A Promise in JavaScript is a commitment that sometime in the future, your code will get a value from some operation (like reading a file or getting JSON from a Web site) or your code will get an error from that operation (like the file doesn't exist or the Web site is down).", deck_id=20)
    promise2= Card(
        front="What three states can a Promise exist in?", back="Pennsylvania, Florida, Rhode Island\n\nor\n\nPending, Fulfilled, Rejected", deck_id=20)
    dom1= Card(
        front="Name one person who is really good at DOM manipulation", back="Justin", deck_id=21)
    dom2= Card(
        front="What is the main difference between the BOM and the DOM?", back="The BOM allows you to communicate with the browser in JS, while the DOM allows you to manipulate HTML elements in JS.", deck_id=21)
    events= Card(
        front="Define an event", back="Something that happens or is regarded as happening; an occurrence, especially one of some importance.\n\n\t-Dictionary.com", deck_id=22)
    events2= Card(
        front="What is the synxtax for adding an event listener on an HTML element?", back="Element.addEventListener(eventType, callbackFunction", deck_id=22)
    storage1= Card(
        front="Where can data be stored on a user's browser?", back="Cookies, Session Storage, or Local Storage.", deck_id=23)
    storage2= Card(
        front="What are the functions for placing or retrieving items from storage?", back="localStorage.getItem('')\nlocalStorage.setItem('')\nsessionStorage.getItem('')\nsessionStorage.setItem('')", deck_id=23)
    sql= Card(
        front="Your database has 1 table named 'puppies' of dogs with columns 'name', 'breed', 'puppies' and 'age_yrs'.\nWrite an SQL query to get the name and breed columns, sorted by age_yrs from oldest to youngest and only include 5 results.", back="SELECT name, breed\nFROM puppies\nORDER BY age_yrs DESC\nLIMIT 5", deck_id=24)
    sql2= Card(
        front="What does SQL stand for?", back="Structured Query Language", deck_id=24)
    regex= Card(
        front="Which words will match with [^bc]at\nchat bat rat cat", back="chat rat", deck_id=25)
    regex1= Card(
        front="Which words will match with \\\.[dw]\nwhale .whale .dog .cat", back=".whale .dog", deck_id=25)
    express= Card(
        front="How do you set a port to an environment variable in Express?", back="const port = process.env.PORT;", deck_id=26)
    express2= Card(
        front="How would set up a typical 'GET' route in Express?", back="const express = require('express');\n\nconst app = express()\n\napp.get('/', (req, res) => {\n\tres.send('Hi Suhayl!');\n});", deck_id=26)
    pug= Card(
        front="Should you ever use Pug?", back="No. Not even when teaching bootcamp students. Instead, teach them React and JSX one week earlier so they don't have to do an entire project using Pug.", deck_id=27)
    pug2= Card(
        front="What is Pug?", back="It's a cute dog and nothing else.", deck_id=27)


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
    db.session.add(tdd)
    db.session.add(tdd2)
    db.session.add(rec)
    db.session.add(rec2)
    db.session.add(iffy)
    db.session.add(iffy2)
    db.session.add(async1)
    db.session.add(async2)
    db.session.add(o)
    db.session.add(o2)
    db.session.add(sor)
    db.session.add(sor2)
    db.session.add(tree)
    db.session.add(tree2)
    db.session.add(tree3)
    db.session.add(tree4)
    db.session.add(graph)
    db.session.add(graph2)
    db.session.add(html1)
    db.session.add(html2)
    db.session.add(api)
    db.session.add(api2)
    db.session.add(promise)
    db.session.add(promise2)
    db.session.add(dom1)
    db.session.add(dom2)
    db.session.add(events)
    db.session.add(events2)
    db.session.add(storage1)
    db.session.add(storage2)
    db.session.add(sql)
    db.session.add(sql2)
    db.session.add(regex)
    db.session.add(regex1)
    db.session.add(express)
    db.session.add(express2)
    db.session.add(pug)
    db.session.add(pug2)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
