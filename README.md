# Recipeople

<a href="https://recipeople.herokuapp.com/">Live Site</a>  |  <a href="https://github.com/MeiMeiYS/group-9-best-group/wiki"> Project Wiki</a> | <a href="https://github.com/MeiMeiYS/group-9-best-group/issue">Report Bug</a>

Recipeople is a website where users can sign up, post recipes, and curate collections of recipes published by other users. This website was designed as a Week 13 midterm project as part of App Academy's 24-week Full Stack Software Engineering Bootcamp.

## Technologies Used
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  | [Node.js](https://nodejs.org/en/)  | [Express](https://expressjs.com/)   |   [Pug](https://pugjs.org/api/getting-started.html) |   [Sequelize](sequelize.org)   |  [PostgreSQL](https://www.postgresql.org/)   |  [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## Launching Locally

### Prerequisites
 - [Node.js 16.13.1](https://nodejs.org/en/)

### Getting Started

1. Clone the project repository
```
   git clone https://github.com/andrewscohen/2020.11.badReads.git
```
2. Install dependencies
```
    npm install
```

3.  Create a local .env file modeled after the .env.example file in the root directory
```
   PORT=8080
   DB_USERNAME=recipeople_admin
   DB_PASSWORD=your_unique_password
   DB_DATABASE=recipeople
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

## Recipeople In Action
Full user stories for the initial development phase are available on the [User Stories](https://github.com/MeiMeiYS/group-9-best-group/wiki/User-Stories) section of the project wiki. A feature list for the initial development phase is available on the MVP Feature List section of the project wiki.

### User Registration and Authentication
New users can register for an account by entering a unique email address, a username, and a secure password.

<div align="center">
<br/>
<img src="https://i.ibb.co/7ybwmS4/sample123-register.gif" alt="Explore Recent Recipes" height="300" align="center"/>
<br/>
<br/>
</div>


Existing users can log in to their account by submitting their credentials via the login form.

<div align="center">
<br/>
<img src="https://i.ibb.co/mN1vsht/sample123-login.gif" alt="Explore Recent Recipes" height="300" align="center"/>
<br/>
<br/>
</div>


Logged in users can select a profile picture, or link a custom image via url

<div align="center">
<br/>
<img src="https://i.ibb.co/dc4Pv24/profile-picture-selection.gif" alt="Select Profile Image" height="450" align="center"/>
<br/>
<br/>
</div>

Users may log out of their account by clicking the **LOGOUT** button on the sitewide header.

<div align="center">
<br/>
<img src="https://i.ibb.co/3fCRrM2/Logout-Click.gif" alt="Logout" height="300" align="center"/>
<br/>
<br/>
</div>

### Creating and Modifying A Recipe

Logged-in users can create a new recipe with a name, description, an optional image, a list of ingredients, and cooking instructions.

<div align="center">
<br/>
<img src="https://i.ibb.co/4YVPbqF/Create-Recipe.gif" alt="Add A Recipe" height="450" align="center"/>
<br/>
<br/>
</div>

When a new recipe is added, a new page is created for the recipe. All users can view the recipe information. Logged in users can add a review, add the recipe to a collection, or add a status. Recipe owners can edit or delete their own recipes.

<div align="center">
<br/>
<img src="https://i.ibb.co/yfb6Ht8/Edit-Hover.gif" alt="Add A Recipe" height="450" align="center"/>
<br/>
<br/>
</div>

When modifying a recipe, an "Edit" form will populate with the recipe's current information. A user may add, edit, or delete ingredients, and can edit the name, description, image, and instructions. If a user would like to delete the recipe, or discard their changes, they may do so from the edit form.

<div align="center">
<br/>
<img src="https://i.ibb.co/pr7Qry0/Edit-Recipe.gif" alt="Add A Recipe" height="450" align="center"/>
<br/>
<br/>
</div>

### Creating and Modifying A Collection







Users can create personalized collections in order to organize groups of curated recipes.
<div align="center">
<br/>
<img src="https://i.ibb.co/3FCj0Vv/Create-Collection.gif" alt="Add Collection" height="100" align="center"/>
<br/>
<br/>
</div>

Users can add and remove recipes from their collections.
<div align="center">
<br/>
<img src="https://i.ibb.co/QQCwYL7/good-add-to-collection.gif" alt="Add To Collection" height="450" align="center"/>
<br/>
<br/>
</div>

Users can edit and delete their collections.
<div align="center">
<br/>
<img src="https://i.ibb.co/HVJm24v/Remove-From-Collection.gif" alt="Delete Collection" width="550" align="center"/>
<br/>
<br/>
</div>

<div align="center">
<br/>
<img src="https://i.ibb.co/LnRJcsg/chrome-capture.giff" alt="Delete Collection" width="550" align="center"/>
<br/>
<br/>
</div>



### Creating and Modifying A Review

Users can add a rating, an image, and a public review on any recipes, and view the reviews that others have posted.


Users can modify and delete their reviews.

A recipe's average rating is visible on the Homepage, the Recipes page, and each recipe's detail page as indicated by a scale ranging from 1 to 5 whisks.


### Assigning A Recipe Status
A user can create, view, update, and remove a personalized status on any recipe in to indicating whether they "Will Cook" the recipe in the future, or whether they already "Cooked" the recipe.
<div align="center">
<br/>
<img src="https://i.ibb.co/09Syxcf/Add-Status.gif" alt="Add A Status" height="450" align="center"/>
<br/>
<br/>
</div>
After assigning a status to a recipe, the user can view the recipe on the Status section of their user page.

<div align="center">
<br/>
<img src="https://i.ibb.co/CPnMyg9/view-status.gif" alt="View Status" height="200" align="center"/>
<br/>
<br/>
</div>



### Search For Recipes
The most recent publicly-visible recipes are visible both on the site Homepage and the Recipes page.

<div align="center">
<br/>
<img src="https://i.ibb.co/RgCdkP7/Explore-Recent-Recipes.gif" alt="Explore Recent Recipes" height="300" align="center" />
<br/>
<br/>
</div>

The Recipes page also includes a case-insensitive search where users can search for any recipe by a case-insensitive substring of the recipe title.

<div align="center">
<br/>
<img src="https://i.ibb.co/GHdVMJJ/Search-Functionality.gif" alt="Explore Recent Recipes" height="300" align="center"/>
<br/>
<br/>
</div>

## Technical Implementation
### Database Design
The full database schema is available to view as a [linked chart on dbdiagram.io](https://dbdiagram.io/d/61afe26a8c901501c0e5914b), or as a [list of tables on the Database Schema page](https://github.com/MeiMeiYS/group-9-best-group/wiki/Database-Schema) of the wiki.

![Full Database Schema](https://i.ibb.co/4S9bs3p/Recipeople.png)

Some tables, such as Roles are reserved for such as creation of an Administrator frontend, where certain users can have access to edit and delete content posted by other users. The Tags table is reserved for creation of recipe tags that a recipe creator can assign to their recipes, or for other users to include in search criteria. Tag categories are intended for the future development of tag grouping, such a *Cuisine* tag category that may have tags such as *Japanese*, *French*, or *Mediterranean*, which can useful to organize tags as the number and diversity of recipes continues to grow.

### Frontend Routes
All frontend routes are covered in detail on the [Fronted Routes section of our project wiki](https://github.com/MeiMeiYS/group-9-best-group/wiki/Frontend-Routes). Frontend routes were designed to enable users access to basic functionality such as registration, authentication, viewing groups of recipes, accessing recipe details, and viewing profile page where users can manage their personal collections.

### API Routes
All frontend routes are covered in detail on the [API Routes section of our project wiki](https://github.com/MeiMeiYS/group-9-best-group/wiki/Frontend-Routes). API routes were designed for users to interact with a page without being redirected.
   </br>

### Developmental Challenges

#### **Considering Volume vs. Maintainability**
For our first project, we overestimated the number of features that we could implement  within a five-day sprint. A fully interactive front-end reflecting the database schema that we designed on the first day could not be fully implemented within the time constraints, so there were many conversations where we decided what must be prioritized and what level of completeness is satisfactory for an MVP.

As the sprint progressed, we began favoring the development of fewer features that work well 99% of the time over many features that work well 70% of the time.
   </br>

#### **DRYing Up Code**
Very similar code was written by multiple users as we worked on similar features independently and simultaneously. As a result, refactoring to add modularity would greatly improve readability and maintainability of the site.
   </br>

#### **Quantity-Measurement-Ingredient Manipulation**
The most challenging back-end task was managing the Quantity, Measurement, and Ingredient (QMI) bundles for entries on a recipe. (i.e. 2 cups flour). For the frontend *Create Recipe and Edit Recipe* forms, each QMI has an id in numeric order. If a user were to delete any QMI from a recipe, all ids must be reset to maintain the order.

````
    if (validatorErrors.isEmpty()) {
                let imageId
                if (imageURL) {
                    const newImage = await Image.create({ url: imageURL })
                    imageId = newImage.dataValues.id ;
                } else {
                    const randomRecipeImage = () => {
                        return (Math.floor(Math.random()*9) + 1).toString()
                    }
                    imageId = randomRecipeImage();
                }

                const recipe = Recipe.build({ name, description, steps, userId, imageId });

                await recipe.save();

                //checking each ingredients
                for (let i = 0; i < qmiCount; i++){
                    const ingredientName = req.body[`ingredient-${i+1}`];
                    const ingredient = await Ingredient.findOne({ where: { name: ingredientName } })

                    if (!ingredient){
                        //if ingredient does not exit
                        const currentIngredient = await Ingredient.create({ name: ingredientName });
                        req.body.ingredientId = currentIngredient.id;

                    } else {
                        //else find ingredient id
                        req.body.ingredientId = ingredient.id;
                    }


                    //build recipeIngredient join table
                    const recipeId = recipe.dataValues.id;
                    await RecipeIngredient.create({
                        recipeId,
                        ingredientId: req.body.ingredientId,
                        quantity: req.body[`quantity-${i+1}`],
                        measurementId: req.body[`measurement-${i+1}`]
                    })
````

For the backend, we need to pass the QMI list data to the route, loop through each QMI and save it in the database. Since our QMI data is not stored directly in the Recipe Table, it must be recreated after the recipe has been added in the database.

````
 function resetId () {
        const qmiCount = qmiList.childElementCount
        qmiCountInput.setAttribute('value', qmiList.childElementCount )
        for (let i = 0; i < qmiCount; i++ ){
            //updating quantity label for attribute
            qmiList.childNodes[i].childNodes[0].childNodes[0].setAttribute('for', `quantity-${i + 1}`);
            //updating quantity label input id and name
            qmiList.childNodes[i].childNodes[0].childNodes[1].id = `quantity-${i + 1}`;
            qmiList.childNodes[i].childNodes[0].childNodes[1].setAttribute('name', `quantity-${i + 1}`);
            //updating measurement label for attribute
            qmiList.childNodes[i].childNodes[1].childNodes[0].setAttribute('for', `measurement-${i + 1}`);
            //updating measurement label input id and name
            qmiList.childNodes[i].childNodes[1].childNodes[1].id = `measurement-${i + 1}`;
            qmiList.childNodes[i].childNodes[1].childNodes[1].setAttribute('name', `measurement-${i + 1}`);
            //updating ingredients label for attribute
            qmiList.childNodes[i].childNodes[2].childNodes[0].setAttribute('for', `ingredient-${i + 1}`);
            //updating ingredients label input id and name
            qmiList.childNodes[i].childNodes[2].childNodes[1].id = `ingredient-${i + 1}`;
            qmiList.childNodes[i].childNodes[2].childNodes[1].setAttribute('name', `ingredient-${i + 1}`);
        }
        return;
    }
````
   </br>

#### **Programmatically Assigning Button IDs**
In order for a user to edit, delete, and view their collections, buttons added via DOM manipulation must be logically linked to the correct collection.  The pug template only showed the collection name but we needed the actual `collectionId` to edit, delete or view it. To resolve this issue, we assigned a `collectionId` as an attribute on the button so that it could be retrieved and parsed when defining event targets.

    const idArr = target.id.split("-");
    const recipeId = idArr[2];
   </br>

## Future Development
As we further develop our programming skills, we will continue to improve the maintainability and user experience of Recipeople.
</br>

### Improved User Experience

#### **Recipe Reviews and Recipe Status CRUD from Badge View**

 - Recipe badges are visible on many parts of the website, including the
   Homepage, the Recipe page, and User pages. However, these badges
   contain limited information, and users must click to navigate to the
   Recipe Detail page in order to add it to a collection, change its
   status, or add a review. In the future, the recipe badges will be
   re-designed to allow users more functionality without requiring an
   additional click to the Recipe Detail page.
   </br>
#### **Sitewide Responsiveness**

 - The website is currently functional on all screen sizes, but is
   styled for screens greater than 900 px in width. New smaller-scale
   layouts will be implemented so that the user experience on mobile or
   tablet devices is comparable to the desktop user experience.
   </br>
### Improved Maintainability

#### **Administrator Interface**

 - In order for an site administrator to moderate content on the
   website, all modifications must be done via SQL queries to a
   centralized database. To mitigate this, a new *administrator* role
   will be added that will enable that user to edit or delete any recipe
   or review posted on the website.
   </br>
#### **Normalization of Ingredient Names**

 - Currently, all ingredients are stored as rows on a database. If a
   user types in a new ingredient for a recipe that is not already in
   the database, a new ingredient is created. However, the addition of
   new ingredients does not currently account for spelling or
   capitalization variations. For example, Tomato, tomatoes, and tomato
   would all be stored in the database as separate ingredients. In order
   to support future functionality, ingredient names may undergo a
   pattern-matching normalization process or third-party food-name API
   validation to prevent duplicate entries within our database.
   </br>

### New Features

#### **Detailed Recipe Features**

 - Currently, the description and instructions for each ingredient are
   stored as strings. Adding additional fields such as serving size,
   cook time, cook temperature, and individual recipe steps can
   compartmentalize information for users, and allow for improved search
   functionality.
   </br>
#### **Implementation of Recipe Tags**

 - The database is already configured to support the addition of "Tags"
   for each recipe. A user will be able to add, view, edit, and delete
   tags from recipes that they have submitted, and a user can use tags
   as search criteria to find new recipes. Once an admin role is
   implemented, an admin will be able to add, edit and delete tags.
   </br>

#### **Shopping Lists**

 - Users will be able to generate a shopping list from a collection that
   aggregates the ingredients from all recipes and combines them into an
   organized list. Normalization of Ingredient Names must be completed
   before implementation of this feature.
   </br>
## Contributors
**Aletheia Kim** | <a href='https://github.com/akim38'>Github</a></br>
**Denise Li** | <a href='https://github.com/cat-friend'>Github</a> | <a href='https://www.linkedin.com/in/denise-li-45350320/'>LinkedIn</a></br>
**Mei Shih** | <a href='https://github.com/MeiMeiYS'>Github</a> | <a href='https://www.linkedin.com/in/meiyinshih/'>LinkedIn</a></br>
**Cameron Whiteside** | <a href='https://github.com/CameronWhiteside'>Github</a> | <a href='https://www.linkedin.com/in/cameronwhiteside/'>LinkedIn</a>
