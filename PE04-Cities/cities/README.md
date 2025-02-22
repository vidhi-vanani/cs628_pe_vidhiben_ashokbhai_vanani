# Cities

# Input
By going through different screens, users can interact with the `Cities` application. To add a city, one must provide its name and the country it belongs to, population, and any other details. They can also view a city's deep details by simply clicking its name from the list.

# Process
The Application is created with the use of React and React Router for Navigation Features. The `Cities List` page has a compiled list of cities, each corresponding to a more extensive view using the hook `useParams`. The `Add City` page offers users to input details concerning the city, which would be stored in the application state, and redirects the user to the `Cities List` page after submission. Clicking on any city will render a dynamic section on the page to show such details while leaving the overall layout intact.

# Output
The user sees a list of cities, adds new cities, and has the option to explore the details of a selected city. The app is made live and dynamic and provides good navigation.