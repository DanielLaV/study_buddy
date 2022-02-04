## `/`
### Home page
If the user has not signed in, this page will display the splash page with login/signup buttons. If the user has signed in, they will be rerouted to their profile page.
* `GET /`
* `POST /`


## `/decks`
### Decks
This page displays all decks and a button for creating a new deck. It also displays the navigation bar with links to navigate through the site.
* `GET /decks`
* `POST /decks`

## `/decks/:deckId`
### Deck details
This page displays the specific deck and its contents. It also displays the navigation bar with links to navigate through the site. There are options for users to create add new cards, add tags to the deck and edit or delete any decks they have created.
* `GET /decks/:deckId`
* `POST /decks/:deckId`
* `PUT /decks/:deckId`
* `DELETE /decks/:deckId`

## `/decks/:deckId/:cardId`
### Card details
This page displays a specific card's details as well as options to edit or delete a card that the user has created. It also displays the navigation bar with links to navigate through the site.
* `GET /decks/:deckId/:cardId`
* `PUT /decks/:deckId/:cardId`
* `DELETE /decks/:deckId/:cardId`

## `/search-results`
### Search results
This page displays search results for the search query that the user has entered as well as the navigation bar with links to navigate through the site. The search results are grouped by resource type (decks, tags, and cards).
* `GET /search-results`

## `/users/:userId`
### User profile page
This page displays the user's profile page which includes their username, biography, the decks that they have created, and decks they have marked as "To Study". The user will also have the option to edit their biography. It also includes the navigation bar that has a search bar, logout button, and links to navigate the site.
* `GET /users/:userId`
* `PUT /users/:userId`
