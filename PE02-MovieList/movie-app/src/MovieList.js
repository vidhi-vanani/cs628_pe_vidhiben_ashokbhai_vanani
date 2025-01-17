/*
-MovieList Component
  
 This React component renders a list of movies with options to filter by genre.
 It includes a dropdown to select a genre, displays filtered movie cards,
 and shows an alert when a movie card is clicked.
 
 -Features:
  Displays a predefined list of movies with title, genre, and release year.
  Allows users to filter movies based on their genre.
  Handles user interactions like clicking a movie card to display its title.
  
 -State:
 `selectedGenre`: Tracks the currently selected genre from the dropdown.
 
 -Functions:
  `handleMovieClick(title)`: Displays an alert with the clicked movie's title.

 -Returns:
  A container with the movie list, filter dropdown, and interactive movie cards.

 -CSS:
  Styles are applied via the `MovieList.css` file.
 */

import React, { useState } from 'react';
import './MovieList.css'; // Importing the CSS file for styling

const MovieList = () => {
  // A list of movies with their title, genre, and release year
  const movies = [
    { title: 'Spider-Man', genre: 'Action', releaseYear: 2002 },
    { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
    { title: 'Life Is Beautiful', genre: 'Comedy', releaseYear: 1997 },
    { title: 'The Creator', genre: 'Science fiction', releaseYear: 2023 },
    { title: '10 Things I Hate About You', genre: 'Drama', releaseYear: 1999 },
  ];

  // State to track the selected genre from the dropdown
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  
  // Filters the movies based on the selected genre
  const filteredMovies = selectedGenre === 'All Genres' 
    ? movies // Show all movies if "All Genres" is selected
    : movies.filter(movie => movie.genre === selectedGenre); // Otherwise, filter by genre

  // Create a unique list of genres from the movies array
  const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  // Handle clicking on a movie card and show an alert with the movie title
  const handleMovieClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <div className="movie-list-container"> {/* Container for the entire movie list */}
      <h1>Movie List</h1>
      
      {/* Dropdown for selecting a genre */}
      <div className="filter">
        <label htmlFor="genre-select">Filter by Genre: </label>
        <select
          id="genre-select"
          value={selectedGenre} // Bind the dropdown value to state
          onChange={(e) => setSelectedGenre(e.target.value)} // Update state when dropdown changes
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre} {/* Display each genre as an option */}
            </option>
          ))}
        </select>
      </div>
      
      {/* Display filtered movies as cards */}
      <div className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <div
            key={index} // Unique key for each card
            className="movie-card" // CSS class for styling each card
            onClick={() => handleMovieClick(movie.title)} // Handle card click
          >
            <h2>{movie.title}</h2> {/* Movie title */}
            <p>Genre: {movie.genre}</p> {/* Movie genre */}
            <p>Release Year: {movie.releaseYear}</p> {/* Movie release year */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList; // Export the component so it can be used in other parts of the app
