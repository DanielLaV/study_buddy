# Study Buddy

<a href="google.com">Live Site</a>  |  <a href="https://github.com/DanielLaV/study_buddy/wiki"> Project Wiki</a> | <a href="https://github.com/DanielLaV/study_buddy/issue">Report Bug</a>

Study Buddy is a website where users can create, study, and share decks of cards for studying computer science topics. This website was designed as a Week 20 project as part of App Academy's 24-week Full Stack Software Engineering Bootcamp.

## Technologies Used
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  | [Node.js](https://nodejs.org/en/)  | [Flask](https://flask.palletsprojects.com/en/2.0.x/)   |   [Jinja](https://jinja.palletsprojects.com/en/2.11.x/templates/) |   [SQLAlchemy](https://www.sqlalchemy.org/)   |  [PostgreSQL](https://www.postgresql.org/)

## Launching Locally

### Prerequisites
 - [Node.js 16.13.1](https://nodejs.org/en/)

### Getting Started
# CHANGE THIS

1. Clone the project repository
```
   git clone https://github.com/DanielLaV/study_buddy.git
```
2. Install dependencies
```
    npm install
```

3.  Create a local .env file modeled after the .env.example file in the root directory
```
   PORT=8080
   DB_USERNAME=demo_user
   DB_PASSWORD=your_unique_password
   DB_DATABASE=study_buddy
   DB_HOST=localhost
   SESSION_SECRET=your_session_secret
```
4. Migrate and seed the database
 ```
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
```

5. Run the project with a starting script
 ```
    npm start
 ```

## Study Buddy In Action
Full user stories for the initial development phase are available on the [User Stories](https://github.com/DanielLaV/study_buddy/wiki/User-Stories-&-Acceptance-Criteria) section of the project wiki. A feature list for the initial development phase is available on the [Feature List](https://github.com/DanielLaV/study_buddy/wiki/Feature-List) section of the project [wiki](https://github.com/DanielLaV/study_buddy/wiki).

### User Registration and Authentication
New users can register for an account by entering a unique username, a secure password, and an optional biography.

## < Add images >


Existing users can log in to their account by submitting their credentials via the login form.

## < Add images >


Logged in users can edit their profile biography

## < Add images >

Users may log out of their account by clicking the **LOGOUT** button on the site-wide header.

## < Add images >

### Creating and Modifying A Deck

Logged-in users can create a new deck with a title and a description.

## < Add images >

When a new deck is added, a new card is created for the deck. All users can view the deck information. Logged in users can add a comment, view the deck, or add the deck to their to-study decks. Deck owners can edit or delete their own decks.

## < Add images >

When modifying a deck, an "Edit" form will populate with the deck's current information. A user may add, edit, or delete cards, and can edit the deck title and description. If a user would like to delete the card, or discard their changes, they may do so from the edit form.

## < Add images >


### Creating and Modifying A Card

Users can create cards in a deck.

## < Add images >

Users can add and remove cards from their deck.

## < Add images >

Users can edit and delete their cards.

## < Add images >

## < Add images >


### Adding and Removing Decks From Their To-Study Collection

Users can mark any deck as to-be-studied and it will be added to their to-study collection.  

Users can remove any deck from their to-study collection.  



### Search By Tags

Each deck will have its tags visible. Users can click on the tags to do a search of all decks with that tag.  

## < Add images >

Users can search for a specific tag using the search bar.

## < Add images >

## Technical Implementation
### Database Design
The full database schema is available to view [on dbdiagram.io](https://dbdiagram.io/d/61f9be7485022f4ee524eb6f), or as a [list of tables on the Database Schema page](https://github.com/DanielLaV/study_buddy/wiki/Database-Schema) of the wiki.



### Frontend Routes
# COME BACK AND FIX LINKS
All frontend routes are covered in detail on the [Fronted Routes section of our project wiki](https://github.com/DanielLaV/study_buddy/wiki/Frontend-Routes). Frontend routes were designed to enable users access to basic functionality such as registration, authentication, viewing decks, accessing cards, searching by tags, and viewing their profile page where users can manage their decks.

### API Routes
# COME BACK AND FIX LINKS
All frontend routes are covered in detail on the [API Routes section of our project wiki](https://github.com/DanielLaV/study_buddy/wiki/API-Documentation). API routes were designed for users to interact with a page without being redirected.
   </br>

### Developmental Challenges

# FILL ME IN



````
  ADD CODE LIKE THIS
````



````
  ADD CODE HERE
````
   </br>



### Improved User Experience

#### **Site-wide Responsiveness**

 - The website is currently functional on all screen sizes, but is
   styled for screens greater than 900 px in width. New smaller-scale
   layouts will be implemented so that the user experience on mobile or
   tablet devices is comparable to the desktop user experience.
   </br>
### Improved Maintainability

#### **Normalization of Tag Names**

 - Currently, all tags are stored as rows on a database. If a
   user types in a new tag for a deck that is not already in
   the database, a new tag is created. However, the addition of
   new tags does not currently account for spelling or
   capitalization variations. For example, JavaScript, Javascript, and JS
   would all be stored in the database as separate tags. In order
   to support future functionality, tag names may undergo a
   pattern-matching normalization process or third-party name API
   validation to prevent duplicate entries within our database.
   </br>

### New Features

# ADD NEW FEATURES OR delete

## Contributors
**Kreston Caldwell-McMurrin** | <a href='https://github.com/krestn'>Github</a></br> | <a href='https://www.linkedin.com/in/krestoncaldwell/'>LinkedIn</a></br>
**Denise Li** | <a href='https://github.com/cat-friend'>Github</a> | <a href='https://www.linkedin.com/in/denise-li-45350320/'>LinkedIn</a></br>
**Sophia Bui** | <a href='https://github.com/sophiebui'>Github</a> | <a href='https://www.linkedin.com/in/sophia-bui/'>LinkedIn</a></br>
**Daniel LaVergne** | <a href='https://github.com/DanielLaV'>Github</a> | <a href='https://www.linkedin.com/in/daniel-lavergne-137772206/'>LinkedIn</a>