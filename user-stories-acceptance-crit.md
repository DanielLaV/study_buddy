CHANGE `REDIRECT` TO `RE-RENDER`

# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

#### Acceptance Criteria

- [ ] A link appears in the navigation to register as a new user (only when not logged in)
- [ ] A link appears on the login page to register as a new user (only when not logged in)
- [ ] When an unregistered user clicks on the registration link/button, they are prompted to enter a desired username, email address, and password, and to confirm their password.
- [ ] If the registration information is invalid, the unregistered user is alerted of the errors in their input(s).
- [ ] If the registration information is valid, a new user is created and the user is logged in.
- [ ] Once successfully registered and logged in, the user is redirected to their profile/splash page and links to post reviews, view their reviews, post recipes, view their recipes, view their collections will appear.

### Log In

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

#### Acceptance Criteria

- [ ] User can enter my email and password in a login form
- [ ] Upon successful completion of the log-in form, the website would redirect user to the homepage of the website
- [ ] When user enters invalid data on the login form, the page will inform user of the failed validations and repopulate the form with the valid entries (except password), so that the user can try again without needing to refill every input field.
- [ ] When clicking the add or update information, the page will render a form for the user to update the information.
- [ ] When a user submits the form, they will be able to view their new profile information without needing to refresh the page.
- [ ] A user may not update profile features of other users.

### Log Out

* As a logged in user, I can log out of my account so I can ensure that it isn’t used without my permission.
    * When I am on any page and I am logged in, I would like to be able to click a button in the navigation bar to log out.
* When I click the log out button and navigate to a different page, I should remain logged out.
* When I am logged out, I can log in with a different account.
* When I am logged out, I should be able to log back in.

#### Acceptance Criteria

- [ ] When the user is logged in, a button appears in the navigation bar to log out.
- [ ] When the user clicks this button, the session ends and the user is logged out.
- [ ] When refreshing the page or traveling to other pages the user does not appear to be logged in.
- [ ] The logged out user can log in with a separate account without issue.

### Demo User Enablement

* As an unregistered and unauthorized user who wants to demo Recipeople, I can enter the site via a single-button click on the login and signup form
    * so that I can view features of the website without creating an account.

#### Acceptance Criteria
- [ ] On the login page, any user can view a “Log in as Demo User” button.
    - [ ] Upon clicking the button, the user can access all features of the site with session-based authentication.

## Decks

### Create Decks
* As a logged in user, when I am on the `/decks` page, create decks to share with other users.
    * I can see a `Create New Deck` button when I am on the `/decks` page.
* When I click the `Create New Deck` button, I see a form for creating a new deck.
    * I must add at least one card in order to create the deck.
* When I enter invalid data on the `Create New Deck` form, the page will inform me of the failed validations and repopulate the form with the valid entries
    * so that I can try again without needing to refill every input field.
* I can see a button to submit the deck.

#### Acceptance Criteria.
- [ ] A logged in user who is on the `/decks` page, the users sees a `Create New Deck` button.
- [ ] When clicking the button, takes user to a form for creating deck.
- [ ] Form has inputs where the user can fill out the title of the deck, description, and tags.
- [ ] When user enters invalid data on the `Create New Deck` form, the page will inform user of the failed validations and repopulate the form with the valid entries, so that the user can try again without needing to refill every input field.
- [ ] A button to submit the deck.
- [ ] When a user submits the deck, the user will be redirected to `/decks:deckId`, where it can be viewed by other users.

### Viewing Decks
* As a logged in or logged out user, I can view the most recently posted decks.
    * I can also view specific decks and the associated cards so that I can decide whether or not to interact with the deck.
* If I am not the creator of the deck, I will not be able to edit the deck.

#### Acceptance Criteria
- [ ] When any user is on home page, the user can see most recent 9 decks.
- [ ] The user can click on a deck to view its details (title, description, deck composition (including number of cards), tags).
- [ ] Only the user who created the deck can edit the deck if they are logged in.

### Editing Decks
* As a logged in user visiting `/decks/:deckId`, I can edit the decks that I have created
    * so that I can change the title of the deck, add or remove cards, edit tags associated with the deck.
* I should not be able to edit any decks that I have not created.

#### Acceptance Criteria
- [ ] When the user is viewing a deck that they have created, the user can click a button to edit the deck.
- [ ] When pressing the button, the user will be taken to a pre-filled form with the deck’s information. The user can then change any of the sections that the user would like.
- [ ] When the user presses the submit button, the deck will update and the changes will be shown on the website.
- [ ] When viewing a deck that the user did not create, the user will not be able to edit the deck.

### Deleting Decks
* As a logged in user visiting `/decks/:deckId`, I can delete the decks that I have created
    * so that when I no longer want to share a deck with others, I can remove it.
* I should not be able to delete any decks that I have not created.
* When I delete a deck, I also delete all the cards inside of it.
* I should be able to make a deck with the same name as the one that I deleted.

#### Acceptance Criteria
- [ ] When the user is viewing a deck that they have created, the user can click a button to delete their deck.
- [ ] When the user clicks the button, the deck and all cards associated with the deck will be deleted.

## Cards

### Creating a Card
* As a logged in user, I can create cards on which to write study material.
* When I am viewing a deck that I have created, in order to create a new card, I can click a button to create a new card and a `Create a New Card` form will appear.
* When I enter invalid data on the `Create a New Card` form, the page will inform me of the failed validations and repopulate the form with the valid entries
    * so that I can try again without needing to refill every input field.

#### Acceptance Criteria
- [ ] When a logged in user is viewing a deck that they have created, they can click a `Create a New Card` button to add a new card to the deck.
- [ ] The button will pop up a form for the user to put card information.
- [ ] When a user enters invalid data, error messages will appear and fields that have been correctly populated will remain the same.

### Reading a Card
* As a logged in user, and I am viewing a card from a deck on the `/decks/:deckId/:cardId` page, I can view the front and back of card.

#### Acceptance Criteria
- [ ] A logged in user is viewing a card from a deck on the `/decks/:deckId/:cardId` page, the user can see the front and back of the card.

### Updating a Card
* As a logged in user, and I am viewing a card that I have created (`/decks/:deckId/:cardId`), I have the option to edit the card.
* When I select the option to edit the card, a form will appear. Information already present on the card will be autopopulated within the form.
* After I have updated the card, I can see the changes that I have made.

#### Acceptance Criteria
- [ ] When a logged in user is viewing a card that they have created (`/decks/:deckId/:cardId`), they have the option to edit the card.
- [ ] When the user selects the option to edit the card, the user will be taken to a pre-filled form with the card's information. The user can then change any of the sections that the user would like.
- [ ] After the user has submitted their changes, they can view the updated card.

### Deleting a Card
* As a logged in user and viewing a card on the `/decks/:deckId/:cardId` page, I can delete a card that I have created.
* I will only see a `Delete Card` button if I am the user who created the card.
* When I click the `Delete Card` button, the card will no longer exist.
* If I try to navigate to the URL of the card that I have deleted, I will get a `404` error.
* I will not be able to delete the cards that other users have created.
* I will be able to create a new card with the same information as the card that I have deleted.
* After I have successfully deleted a card, I will be redirected to `/decks/:deckId/`.

#### Acceptance Criteria
- [ ] When a user is viewing a deck that they have created on the `/decks/:deckId/:cardId` page, a `Delete Card` button appears.
- [ ] The user will only see a `Delete Card` button if they are the user who created the card.
- [ ] When the user clicks the `Delete Card` button, the card will be deleted.
- [ ] If the user tries to navigate to the URL of the card that they have deleted, they will get a `404` error.
- [ ] A user cannot delete a card they they have not created.
- [ ] A user will be able to create a new card with the same name as the card that they have deleted.
- [ ] Upon successful deletion of a card, the user will be redirected to `/decks/:deckId/`.

## Deck Tags

### Creating a Tag for a Deck
* As a logged in user, when I am viewing a deck that I have created on the `/decks/:deckId` page, I can add a tag on that deck
    * by clicking on an `Add a Tag` button.
* When I click the `Add a Tag` button, I will see a form where I can enter tags for that deck.
* When I enter invalid data on the `Add a Tag` form, the page will inform me of the failed validations and repopulate the form with the valid entries
    * so that I can try again without needing to refill every input field.
* I will see a `Submit` button for my tags.
* When I click on the `Submit` button, my tags will appear on the page
* When I have successfully created tags for the deck, the page will rerender and I can see the tags for that deck.

#### Acceptance Criteria
- [ ] When logged in users are viewing a deck that they have created on the `/decks/:deckId` page, they will see a `Add a Tag` button.
- [ ] When authorized users click on the `Add a Tag` button, they will see a form in which to enter tags one at a time.
- [ ] When users enter invalid data on the `Add a Tag` form, the page will inform them of the failed validations.
- [ ] Users will see a `Submit` button for their tags.
- [ ] When the user submits their tags, the page will rerender and show the tags that they have created.

### Viewing Tags of a Deck
* As an aunthenticated user, when I am on a deck's (`/decks/:deckId`) page, I can view all tags of the deck.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck's (`/decks/:deckId`) page, they can see all tags associated with that deck.

### Updating Tags of a Deck
* As an authenticated user, when I am viewing the deck that I have created on the `/decks/:deckId` page, I can edit the tags for that deck.
* I will see an interactable `Edit Tags` button.
* I will not be able to edit the tags of a deck that I did not create.
* When I click the `Edit Tags` button, a form will pop up and I can edit tags.
* When I enter invalid data on the `Edit Tags` form, the page will inform me of the failed validations.
* I will see a `Submit` button for my tags.
* When I click on the `Submit` button, my updated tags will appear on the page.

#### Acceptance Criteria
- [ ] When logged in users are viewing a recipe on the `/decks/:deckId` page, authorized users will see an `Edit Tags` button.
    - [ ] Only the user who has created the deck will be authorized to edit the tags.
- [ ] After pressing `Edit Tags` button, they will see a form that is pre-filled with the deck's current tags. They can then change any existing tags or add new tags.
- [ ] When users enter invalid data on the `Edit Tags` form, the page will inform them of the failed validations.
- [ ] Users will see a `Submit` button for their tags.
- [ ] When the user submits their edited tags, the tags will appear on the page.

### Deleting a Tag of a Deck
* As a logged in user, when I am viewing a deck that I have created on the `/decks/:deckId` page, I can delete any tags that I have added.
* I will be able to see an interactable `Delete` button next to the tag that I have created.
* If I click the `Delete` button, my tag will be deleted and will not appear on the page.
* I will not be able to delete another user's tag.
* I will be able to leave another tag for the same deck without any issues.
* I will be able to create a tag with the same name as the tag that I have just deleted.

#### Acceptance Criteria
- [ ] When logged in users are viewing a deck on the `/decks/:deckId` page, they will see an interactable `Delete` button next to tags that they have created.
- [ ] After pressing the `Delete` button, the tag will disappear.
- [ ] Only the user who has left the tag will be authorized to delete the tag.
- [ ] The user will be able to leave another tag for the same deck.
- [ ] The user will be able to create another tag with the same name as the tag that they have just created.

# - need to do Tags - item 5; study decks from features list (all), search, bonus items


## Interactivity:  "Cooked" vs. "Will Cook"
### Assign a Recipe as “Cooked”
* As a logged in user, I can mark a recipe as “cooked” so that I know that I have tried making this recipe before.
* When I am viewing a recipe, I will see a `Cooked` button that I can click to indicate that I have cooked the recipe.
* The `cooked` status will be retained when I visit the `/recipes/:recipeId` page again.
* I can view all of the recipes that I have marked as "cooked" from my user page (`/users/:userId`) when I am logged in.
#### Acceptance Criteria
- [ ] When logged in users are viewing a recipe on the `/recipes/:recipeId` page, they will see a “Cooked” button.
- [ ] When logged in users click the “Cooked” button it will change color so that whenever they are on the `/recipes/:recipeId` page, that color will indicate they have indicated it as “cooked”.

### Unassign a Recipe as “Cooked”
* As a logged in user, when I am viewing a recipe on the `/recipes/:recipeId` page, I can unmark a recipe as “cooked” in case I mistakenly marked it as cooked.
* When I am viewing a recipe, I see a button that indicates “cooked” and I may click it to undo its “cooked” status.
* If I see that recipe again, the recipe will no longer have a small icon next to it indicating “cooked”.
* Also, if a recipe currently has the "cooked" status, if I click on "will cook," the recipe will now have the "will cook" status and no longer have the "cooked" status.
* I can mark the same recipe as "cooked" if I had previously unmarked it as "cooked."
* Recipes that are no longer marked as "cooked" will disappear from the list of "cooked" recipes on my user page.

#### Acceptance Criteria
- [ ] When logged in users are viewing a recipe on the `/recipes/:recipeId` page, they will see a “Cooked” button with a color that indicates “cooked”.
- [ ] When logged in users click the “Cooked” button it will change to the original color so that it is no longer marked as “cooked”.
- [ ] When users toggle off from from the "Cooked" status, the recipe will no longer appear in their "cooked" collection.
- [ ] Users can mark the same recipe as "cooked" if they had previously marked and unmarked it as "cooked."

### Assign a Recipe as “Will Cook”
* As a logged in user, when I am viewing a recipe on the `/recipes/:recipeId` page, I can mark a recipe as “will cook” so that I can mark that I would like to try it in the future.
* When I am viewing a recipe, I will see a `Will Cook` button that I can click to indicate that I want to cook the recipe.
* The `will cook` status will be retained when I visit the `/recipes/:recipeId` page again.
* I can view all of the recipes that I have marked as "will cook" from my user page (`/users/:userId`) when I am logged in.
* Recipes that are no longer marked as "will cook" will disappear from the list of "will cook" recipes on my user page.

#### Acceptance Criteria
- [ ] When logged in users are viewing a recipe on the `/recipes/:recipeId` page, they will see a “Will Cook” button.
- [ ] When logged in users click the “Will Cook” button it will change color so that whenever they are on the `/recipes/:recipeId` page, that color will indicate they have indicated it as “Will Cook”.
- [ ] Logged-in users can view recipes that they have marked as "will cook" when they navigate to their user page (`/users/:userId`).

### Unassign a Recipe as “Will Cook”
* As a logged in user, I can unmark a recipe as “will cook” in case I mistakenly mark something as “will cook” or have cooked a recipe that was previously marked as “will cook”.
* When I am viewing a recipe, I see a “will cook” button that I can click that is the color indicating it has been clicked before.
* I can click “will cook” so that it changes to its original unclicked color or I can click the “cooked” button which will also change the “will cook” button to its original unclicked color.
* I can mark the same recipe as "will cook" if I had previously unmarked it as "will cook."

### Acceptance Criteria
- [ ] When logged in users are viewing a recipe on the `/recipes/:recipeId` page, they will see a “Will Cook” button that is colored to indicate it has been clicked before.
- [ ] When logged in users click the colored “Will Cook” button it will change color so that whenever they are on the `/recipes/:recipeId` page, that color will the button has not been clicked.
- [ ] When logged in users click click the "cooked" button on a recipe currently marked as "will cook," the “will cook” button to its original unclicked color.
- [ ] Logged in users can mark the same recipe as "will cook" if they had previously marked and unmarked it as "will cook."
