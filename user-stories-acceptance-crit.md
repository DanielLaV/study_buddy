# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

#### Acceptance Criteria

- [ ] A link appears in the navigation to register as a new user (only when not logged in)
- [ ] A link appears on the login page to register as a new user (only when not logged in)
- [ ] When an unregistered user clicks on the registration link/button, they are prompted to enter a desired username, email address, and password, and to confirm their password.
- [ ] If the registration information is invalid, the unregistered user is alerted of the errors in their input(s).
- [ ] If the registration information is valid, a new user is created and the user is logged in.
- [ ] Once successfully registered and logged in, the user is redirected to their profile/splash page and links to create decks and view their decks will appear.

### Log In

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I am on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

#### Acceptance Criteria

- [ ] User can enter their email and password in a log-in form
- [ ] Upon successful completion of the log-in form, the website would redirect the user to the homepage of the website
- [ ] When the user enters invalid data on the log-in form, the page will inform the user of the failed validations and repopulate the form with the valid entries (except password), so that the user can try again without needing to refill every input field.
- [ ] When clicking the add or update information, the page will render a form for the user to update the information.
- [ ] When a user submits the form, they will be able to view their new profile information without needing to refresh the page.
- [ ] A user may not update profile features of other users.

### Log Out

* As a logged in user, I can log out of my account so I can ensure that it is not used without my permission.
    * When I am on any page and I am logged in, I can click a button in the navigation bar to log out.
* When I click the log out button and navigate to a different page, I should remain logged out.
* When I am logged out, I can log in with a different account.
* When I am logged out, I should be able to log back in.

#### Acceptance Criteria

- [ ] When the user is logged in, a button appears in the navigation bar to log out.
- [ ] When the user clicks this button, the session ends and the user is logged out.
- [ ] When refreshing the page or traveling to other pages the user remains not logged in.
- [ ] The logged-out user can log back in or log in with a separate account without issue.

### Demo User Enablement

* As an unregistered and unauthorized user who wants to demo Study Buddy, I can enter the site via a single-button click on the login and signup form
    * so that I can view features of the website without creating an account.

#### Acceptance Criteria
- [ ] On the login page, any user can view a “Log in as Demo User” button.
    - [ ] Upon clicking the button, the user can access all features of the site with session-based authentication.

## Decks

### Create Decks
* As a logged in user, when I am on the `/decks` page, I can create decks to share with other users.
    * I can see a `Create New Deck` button when I am on the `/decks` page.
* When I click the `Create New Deck` button, I see a form for creating a new deck.
    * I must add at least one card in order to create the deck.
* When I enter invalid data on the `Create New Deck` form, the page will inform me of the failed validations and repopulate the form with the valid entries
    * so that I can try again without needing to refill every input field.
* I can see a button to submit the deck.

#### Acceptance Criteria.
- [ ] A logged in user who is on the `/decks` page sees a `Create New Deck` button.
- [ ] After clicking the `Create New Deck` button, a form for creating a deck is rendered.
- [ ] The form has inputs where the user can fill out the title of the deck, description, and tags.
- [ ] When user enters invalid data on the `Create New Deck` form, the page will inform the user of the failed validations and repopulate the form with the valid entries, so that the user can try again without needing to refill every input field.
- [ ] A button to submit the deck is shown.
- [ ] When a user submits the deck, the user will be redirected to `/decks:deckId`, where it can be viewed by other users.

### Viewing Decks
* As a logged-in or logged-out user, I can view the most recently posted decks.
    * I can also view specific decks and the associated cards so that I can decide whether or not to interact with the deck.
* If I am not the creator of the deck, I will not be able to edit the deck.

#### Acceptance Criteria
- [ ] When any user is on the home page, the user can see the nine most recent decks.
- [ ] The user can click on a deck to view its details (title, description, deck composition (including number of cards), tags).
- [ ] Only the user who created the deck can edit the deck if they are logged in.

### Editing Decks
* As a logged-in user visiting `/decks/:deckId`, I can edit the decks that I have created
    * so that I can change the title or description of the deck, add or remove cards, edit tags associated with the deck.
* I should not be able to edit any decks that I have not created.

#### Acceptance Criteria
- [ ] When the user is viewing a deck that they have created, the user can click a button to edit the deck.
- [ ] When pressing the button, the user will be taken to a pre-filled form with the deck’s information. The user can then change any of the sections.
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
* When I enter valid data, the card will be shown in my deck.

#### Acceptance Criteria
- [ ] When a logged-in user is viewing a deck that they have created, they can click a `Create a New Card` button to add a new card to the deck.
- [ ] The button will show a form for the user to put card information.
- [ ] When a user enters invalid data, error messages will appear and fields that have been correctly populated will remain the same.

### Reading a Card
* As a logged-in user who is viewing a card from a deck on the `/decks/:deckId/:cardId` page, I can view the front and back of card.

#### Acceptance Criteria
- [ ] When a logged-in user is viewing a card from a deck on the `/decks/:deckId/:cardId` page, the user can see the front and back of the card.

### Updating a Card
* As a logged-in user, while viewing a card that I have created (`/decks/:deckId/:cardId`), I have the option to edit the card.
* When I select the option to edit the card, a form will appear. Information already present on the card will be autopopulated within the form.
* After I have updated the card, I can see the changes that I have made.

#### Acceptance Criteria
- [ ] When a logged-in user is viewing a card that they have created (`/decks/:deckId/:cardId`), they have the option to edit the card.
- [ ] When the user selects the option to edit the card, the user will be taken to a pre-filled form with the card's information. The user can then change any of the sections that the user would like.
- [ ] After the user has submitted their changes, they can view the updated card.

### Deleting a Card
* As a logged-in user and viewing a deck that they have created (`/decks/:deckId/`), I can delete a card that I have created.
* I will only see a `Delete Card` button if I am the user who created the card.
* When I click the `Delete Card` button, the card will no longer exist.
* If I try to navigate to the URL of the card that I have deleted, I will get a `404` error.
* I will not be able to delete the cards that other users have created.
* I will be able to create a new card with the same information as the card that I have deleted.
* After I have successfully deleted a card, the `/decks/:deckId/` page will re-render.

#### Acceptance Criteria
- [ ] When a user is viewing a deck that they have created (`/decks/:deckId/`), a `Delete Card` button will be visible.
- [ ] The user will only see a `Delete Card` button only if they are the user who created the card.
- [ ] When the user clicks the `Delete Card` button, the card will be deleted.
- [ ] If the user tries to navigate to the URL of the card that they have deleted, they will get a `404` error.
- [ ] A user cannot delete a card that they have not created.
- [ ] A user will be able to create a new card with the same name as the card that they have deleted.
- [ ] Upon successful deletion of a card, the `/decks/:deckId/` page will re-render.

## Study Decks

### Marking and Unmarking Decks as `To Study`
* As an authenticated user, when I am viewing a deck (`/decks/:deckId/`), I can mark any deck as `To Study`.
    * I can also unmark a deck as `To Study` when I am viewing a deck (`/decks/:deckId/`).
    * I can re-mark a deck as `To Study` that I had previously unmarked as `To Study`.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck (`/decks/:deckId/`), they can mark any deck as `To Study`.
- [ ] When an authenticated user is viewing a deck (`/decks/:deckId/`), they can unmark any deck that they have previously marked as `To Study`.
- [ ] When an authenticated user is viewing a deck (`/decks/:deckId/`), they can re-mark any deck that they have previously unmarked as `To Study`.


### Viewing Decks Marked as `To Study`
* As an authenticated user, when I am viewing a deck (`/decks/:deckId/`) and I have previously marked that deck as `To Study`, I will see that I have previously marked the deck as `To Study`.
* As an authenticated user, I will see a `To Study` link on the navigation bar.
    * When I click that link, I will be routed to `/to-study/:userId`.
* When I am viewing `/to-study/:userId`, I can see all decks that I have marked as `To Study`.
    * If I have not marked any decks as `To Study`, I will see a message that says I have not marked any decks as `To Study`.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck (`/decks/:deckId/`) that they have previously marked as `To Study`, they will see that they have previously marked the deck as `To Study`.
- [ ] An authenticated user will see a `To Study` link on the navigation bar.
    - [ ] When they click that link, they will be routed to `/to-study/:userId` and all decks that they have marked as `To Study` will be displayed.
- [ ] If an authenticated user has not marked any decks as `To Study`, when they view `/to-study/:userId`, they will see a message that indicates that they have not marked any decks as `To Study`.

### Studying a Deck
* As an authenticated user, I will be able to study decks that I have marked as `To Study`.
* When I am viewing a deck (`/decks/:deckId/`) that I have previously marked as `To Study`, I can click a button that says `Study`.
* When I click the `Study` button, I will see one card at a time. I will only see the front side of the card. In order to see the answer, I will have to click a `Reveal Answer` button.
* When I click the `Reveal Answer` button, I can indicate if I got the answer right or not.
    * If I indicate that I have gotten the answer correct, I will not see the card again in that study instance.
    * If I indicate that I have gotten the answer wrong, I will see the card again to study it.
* I can see each card at least once while studying a deck.
* If I have indicated that I have gotten all answers in a deck correct, the deck will remain marked as `To Study`.

#### Acceptance Criteria
- [ ] Authenticated users can only study decks that they have marked as `To Study`.
- [ ] When they are viewing a deck (`/decks/:deckId/`) that they have previously marked as `To Study`, they can click a button that says `Study`.
- [ ] When they click the `Study` button, they will see one card at a time. They will only see the front side of the card. In order to see the answer, they will have to click a `Reveal Answer` button.
- [ ] When they click the `Reveal Answer` button, they can indicate if they got the answer right or wrong.
    - [ ] If they indicate that they have gotten the answer correct, they will not see the card again in that study instance.
    - [ ]  If they indicate that they have gotten the answer wrong, they will see the card again to study it.
- [ ] The user can see each card at least once while studying a deck.
- [ ] If the user has indicated that they have gotten all answers in a deck correct, the deck will remain marked as `To Study`.

## Deck Tags

### Creating a Tag for a Deck
* As a logged-in user, when I am viewing a deck that I have created on the `/decks/:deckId` page, I can add a tag to that deck
    * by clicking on an `Add a Tag` button.
* When I click the `Add a Tag` button, I will see a form where I can enter tags for that deck.
* When I enter invalid data on the `Add a Tag` form, the page will inform me of the failed validations and repopulate the form with the valid entries
    * so that I can try again without needing to refill every input field.
* I will see a `Submit` button for my tags.
* When I click on the `Submit` button, my tags will appear on the page
* When I have successfully created tags for the deck, the page will re-render and I can see the tags for that deck.
* I should not be able to add tags to a deck that another user has created.

#### Acceptance Criteria
- [ ] When logged-in users are viewing a deck that they have created on the `/decks/:deckId` page, they will see a `Add a Tag` button.
- [ ] Only the user who has created the deck is authorized to create tags for that deck.
- [ ] When authorized users click on the `Add a Tag` button, they will see a form in which to enter tags one at a time.
- [ ] When users enter invalid data on the `Add a Tag` form, the page will inform them of the failed validations.
- [ ] Users will see a `Submit` button for their tags.
- [ ] When the user submits their valid tags, the page will re-render and show the tags that they have created.


### Viewing Tags of a Deck
* As an authenticated user, when I am on a deck's (`/decks/:deckId`) page, I can view all tags of the deck.
    * When I click on a tag, a search results page will appear and all decks with the tag that I clicked on will appear.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck's (`/decks/:deckId`) page, they can see all tags associated with that deck.
    - [ ] When an authenticated user is viewing a deck's (`/decks/:deckId`) page and clicks on a tag, the API will conduct a search, and the page will display all decks associated with that tag.

### Updating Tags of a Deck
* As an authenticated user, when I am viewing the deck that I have created on the `/decks/:deckId` page, I can edit the tags for that deck.
* I will see an interactable `Edit Tags` button.
* I will not be able to edit the tags of a deck that I did not create.
* When I click the `Edit Tags` button, a form will render where I can edit the tags.
* When I enter invalid data on the `Edit Tags` form, the page will inform me of the failed validations.
* I will see a `Submit` button for my tags.
* When I click on the `Submit` button, my updated tags will appear on the page.
* I will not be able to edit tags on a deck that another user has created.

#### Acceptance Criteria
- [ ] When logged-in users are viewing a deck on the `/decks/:deckId` page, authorized users will see an `Edit Tags` button.
    - [ ] Only the user who has created the deck will be authorized to edit the tags.
- [ ] After pressing the `Edit Tags` button, they will see a form that is pre-filled with the deck's current tags. They can then change any existing tags or add new tags.
- [ ] When users enter invalid data on the `Edit Tags` form, the page will inform them of the failed validations.
- [ ] Users will see a `Submit` button for their tags.
- [ ] When the user submits their edited tags, the tags will appear on the page.

### Deleting a Tag of a Deck
* As a logged-in user, when I am viewing a deck that I have created on the `/decks/:deckId` page, I can delete any tags that I have added.
* I will be able to see an interactable `Delete` button next to the tag that I have created.
* If I click the `Delete` button, my tag will be deleted and will not appear on the page.
* I will not be able to delete tags on a deck that another user has created.
* I will be able to leave another tag for the same deck without any issues.
* I will be able to create a tag with the same name as the tag that I have just deleted.

#### Acceptance Criteria
- [ ] When logged in users are viewing a deck that they have created on the `/decks/:deckId` page, they will see an interactable `Delete` button next to tags that they have created.
    - [ ] Only the user who has created the deck will be authorized to delete the tags for that deck.
- [ ] After pressing the `Delete` button, the tag will disappear.
- [ ] Only the user who has left the tag will be authorized to delete the tag.
- [ ] The user will be able to leave another tag for the same deck.
- [ ] The user will be able to create another tag with the same name as the tag that they have just created.

## Search

### Performing a Search
* As an authenticated user, I can see a search bar on the navigation bar.
    * When I enter a search query, I will be rerouted to `/search-results`. I will see decks, tags, and card contents that match my search query.
        * I will see the search results grouped by the resource type. For example, all decks that match the search query will appear together, all tags that match the search query will appear together, etc.

#### Acceptance Criteria
- [ ] When logged-in users are viewing any page, they will see an interactable search bar in the navigation bar.
- [ ] When the authenticated user enters a search term, they will be rerouted to `/search-results`, the page will display all decks, tags, and cards that match the search term.
- [ ] Search results will be grouped by resource type.


# Bonus

## Deck Comments

### Create a Comment
* As an authenticated user, when I am viewing a deck on the `/decks/:deckId` page, I can leave a comment.
    * I can see a `Leave a Comment` button.
        * When I click the `Leave a Comment` button, I will see a form where I can enter a comment for that deck.
* When I enter invalid data on the `Leave a Comment` form, the page will inform me of the failed validations.
* I will see a `Submit` button for my comment.
* When I click on the `Submit` button, my comment will appear on the `/decks/:deckId` page.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck on the `/decks/:deckId` page, they can leave a comment.
    - [ ] They can see a `Leave a Comment` button.
        - [ ] When they click the `Leave a Comment` button, they will see a form where they can enter a comment for that deck.
- [ ] When they enter invalid data on the `Leave a Comment` form, the page will inform them of the failed validations.
- [ ] They will see a `Submit` button for their comment.
- [ ] When they click on the `Submit` button, the comment will appear on the `/decks/:deckId` page.

### Read All Comments for a Deck
* As an authenticated user, when I am viewing a deck on the `/decks/:deckId` page, I can view all comments for that deck.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck on the `/decks/:deckId` page, they can view all comments for that deck.

### Edit a Comment
* As an authenticated user, when I am viewing a deck on the `/decks/:deckId` page, I can edit a comment that I have left.
    * I can see an `Edit a Comment` button.
        * When I click the `Edit a Comment` button, I will see a form where I can edit my comment for that deck. The form will prepopulate with the current comment.
* When I enter invalid data on the `Edit a Comment` form, the page will inform me of the failed validations.
* I will see a `Submit` button for my edited comment.
* When I click on the `Submit` button, my edited comment will appear on the `/decks/:deckId` page.
* I will be unable to edit a comment left by another user.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing a deck on the `/decks/:deckId` page, they can edit a comment that they have left.
    - [ ] They can see an `Edit a Comment` button.
        - [ ] When they click the `Edit a Comment` button, they will see a form where they can edit a comment for that deck. The form will prepopulate with the current comment.
- [ ] When they enter invalid data on the `Edit a Comment` form, the page will inform them of the failed validations.
- [ ] They will see a `Submit` button for their edited comment.
- [ ] When they click on the `Submit` button, the edited comment will appear on the `/decks/:deckId` page.
- [ ] A user is only authorized to edit a comment that they have made.

### Delete a Comment
* As an authenticated user, when I am viewing a deck on the `/decks/:deckId` page, I can delete a comment that I have left.
    * I will be able to see an interactable `Delete` button.
* If I click the `Delete` button, my comment will be deleted and will not appear on the page.
* I will not be able to delete another user's comment.
* I will be able to leave another comment for the same deck without any issues.

#### Acceptance Criteria
- [ ] When logged-in users are viewing a deck on the `/decks/:deckId` page, they will see an interactable `Delete` button for comments that they have created.
- [ ] After pressing the `Delete` button, the comment will disappear.
- [ ] Only the user who has left the comment will be authorized to delete the comment.
- [ ] The user will be able to leave another comment for the same deck.

## User Profile Page
### Viewing a User Profile Page
* As an authenticated user, I can view any user's profile when I navigate to `/users/:userId`.
* I can see their username and decks that they have marked as `To Study`.

#### Acceptance Criteria
- [ ] Only authenticated users can navigate to `/users/:userId`.
- [ ] Username and decks that a user has marked as `To Study` will be displayed on `/users/:userId`.

### Editing a User Profile
* As an authenticated user, when I am viewing my own profile (`/users/:userId`), I can edit my profile.
    * I will see an `Edit Profile` button.
* When I click the `Edit Profile` button, a form will appear with prepopulated data that is currently in my profile.
* I will be able to edit my biography.
* When I enter invalid data on the `Edit Profile` form, the page will inform me of the failed validations.
* I will see a `Submit` button for my edited user profile.
* When I click on the `Submit` button, my edited profile will appear on the `/users/:userId` page.
* I will be unable to edit another user's profile.

#### Acceptance Criteria
- [ ] When an authenticated user is viewing their own profile (`/users/:userId`), they can edit their profile.
    - [ ] They can see an `Edit Profile` button.
        - [ ] When they click the `Edit Profile` button, they will see a form where they can edit their biography. The form will prepopulate with the current profile data.
- [ ] When they enter invalid data on the `Edit Profile` form, the page will inform them of the failed validations.
- [ ] They will see a `Submit` button for their edited profile.
- [ ] When they click on the `Submit` button, the edited profile will appear on the `/users/:userId` page.
- [ ] A user is only authorized to edit their own profile.
