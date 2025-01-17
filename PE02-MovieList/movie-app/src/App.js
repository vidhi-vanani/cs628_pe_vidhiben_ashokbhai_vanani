import React from 'react'; // Import React to use JSX and create components
import './App.css'; // Import the CSS file for styling the App component
import MovieList from './MovieList'; // Import the MovieList component

// Main App component
function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App; // Export the App component to be used as the main entry point of the application
