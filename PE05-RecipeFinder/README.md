# Recipe Finder

# Input
The Recipe Finder application lets users enter and manage their `recipes`. Users can enter a new recipe by indicating the recipe name, a list of ingredients, and preparation methods and can update existing recipes or delete them when necessary. Input is done through a user-friendly form as a front end for the application built in React.

# Process
The application was developed using the `MERN` stack. Thus, once the user submits a recipe, the front end sends this information to the back end through `API`. The back end was built using Express.js and connected to `MongoDB Atlas` for querying the request and for storing the recipe in the database. Another important component of this application is React Router, which is used for navigation purposes among the different pages like recipe list and recipe detail. In addition to this, the application also allows its users to update/delete recipe, and all of this will reflect the changes in real time in the database.

# Output
It allows a user to view all the stored recipes. When he/she clicks on any of the `recipes`, the details will show on a different page. Any changes will be available `immediately` in the interface. The application promises a smooth user experience with a clean and beautiful interface.