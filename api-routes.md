# API Documentation

## API-Routes

This web app uses the following API routes to dynamically update the page.

### Decks
* An authenticated user may create a new deck and view all decks that they have created without causing a refresh/redirect.
    * `GET /api/decks`
    * `POST /api/decks`

* An authenticated user may view, edit, and delete a specific deck that they have created by changing its title or description.
    * `GET /api/decks/:deckId`
    * `PUT /api/decks/:deckId`
    * `DELETE /api/decks/:deckId`

### Cards
* An authenticated user may create a new card in a deck that they have created. They can also view, edit, and delete a specific card that they have created without causing a refresh/redirect.
    * `GET /api/cards/:cardId`
    * `POST /api/cards/:cardId`
    * `PUT /api/cards/:cardId`
    * `DELETE /api/cards/:cardId`

### Tags
* An authenticated user may view all decks that have a specific tag.
    * `READ /api/tags/:tagId`

* An authenticated user may create new tags on a deck that they have created. They can also edit and delete tags on decks that they have created without causing a refresh/redirect.
    * `POST /api/tags/:tagId`
    * `PUT /api/tags/:tagId`
    * `DELETE /api/tags/:tagId`

### `To Study`
* An authenticated user may mark or unmark a deck as `To Study` without causing a refresh.
    * `POST /api/tostudy/:deckId`

### Studying a Deck
* When studying a card, an authenticated user may view a card, reveal its answer, and mark it as correct or incorrect without causing a refresh.
    * `GET /api/user-study-card/:id`
    * `POST /api/user-study-card/:id`

## Bonus Routes

### Deck Comments
* An authenticated user may create a new comment on any deck without causing a refresh or redirect. They can also edit and delete any comments that they have created without causing a refresh or redirect. When a user creates, edits, or deletes a comment, the page will update dynamically.
    * `POST /api/comments/:deckId`
    * `GET /api/comments/:deckId`
    * `PUT /api/comments/:commentId`
