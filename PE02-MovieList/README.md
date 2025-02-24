# Movie List

# Input  
The movie application accepts inputs in the form of an array of movie objects which can include properties: `title`, `genre`, and `release year`. The actual input comes from the user interacting with a dropdown menu (for reducing the movies by genre) and upon the user's clicking individual films, and these inputs are stored in the React state variables to watch the list of movies and the selected genre.

# Process  
In computing with JSX rendering and React hooks for maintaining states, the so-called `MovieList` React component affects the input. Just data received to draw dynamic movies, each movie as an item in a list or card, and then populate the dropdown with unique genres from the movies array. So, the choice made by the user about genre filtering sends the call to filter into the UI, affects a decision to display those choices on the screen, and extends to be an actual event and then a handler. That is how an event is generated by clicking a movie for a look at the movie title.

# Output   
What comes back to the user of the application is an interactive movie list responsive to almost all things that one might initiate or even consume. It reacts to rendering movies of the genre selected dynamically, as if one is supposed to either view a form or all movies under "All Genres." By clicking a movie, a real-time alert is triggered, and its title is posted, making it more interactive. The form is styled so that it looks very professional-rolled in CSS.
