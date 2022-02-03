# Study-Buddy Redux State
​
{
   users: {
      1: {
         id: 2,
         username: "Barry",
         bio: "I am a barry"
      },
   },
   decks_created: {
      1: {
         id: 1,
         title: "Redux State",
         description: "California",
         user_id: 1,
         tags: ["Jokes", "Redux"]
      },
      2: {
         id: 2,
         title: "Python Comprehensions",
         description: "Lists, Sets, Dictionary, Generator",
         user_id: 1,
         tags: ["Python", "Sets"]
      },
   },
   decks_studying: {
      1: {
         id: 3,
         title: "Doubly-linked Lists in Javascript",
         description: "They go both ways",
         user_id: 2,
         toStudy: true
      },
      2: {
         id: 4,
         title: "Memoization",
         description: "An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.",
         user_id: 2,
         toStudy: true
      },
   cards: {
      1: {
         id: 3,
         title: "Doubly-linked Lists in Javascript",
         description: "They go both ways",
         user_id: 2,
         toStudy: true
      },
      2: {
         id: 4,
         title: "Memoization",
         description: "An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.",
         user_id: 2,
         toStudy: true
      },
   tags: {
      1: {
         id: 3,
         name: "JS",
         deck_id: 2
      },
      2: {
         id: 1,
         name: "OOP",
         deck_id: 2
      },
      3: {
         id: 6,
         name: "Python",
         deck_id: 2
      },
      4: {
         id: 2,
         name: "Redux",
         deck_id: 1
      },
   comments: {
      1: {
         id: 1,
         content: "This is a great deck",
         user_id: 1,
         deck_id: 1
      },
      2: {
         id: 2,
         content: "This is a deck",
         user_id: 2,
         deck_id: 2
      },
   },
   session: {
      user: {
         id: 1,
         name: 'Demo'
      }
   },
   errors: [
      "Unauthorized",
      "Incorrect username/password combination",
      "Title cannot exceed 20 characters in length"
   ]
}
