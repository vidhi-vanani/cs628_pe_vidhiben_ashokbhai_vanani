import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './App.css';

function App() {
  // State to manage the list of cities
  const [cities, setCities] = useState([]);

  // Function to add a new city to the list
  const addCity = (city) => {
    setCities([...cities, { ...city, id: cities.length + 1 }]);
  };

  return (
    <Router>
      <div>
        {/* Application Header */}
        <header>
          <h1>Cities Application</h1>
          {/* Navigation Links */}
          <nav>
            <Link to="/">Cities List</Link>
            <Link to="/add">Add City</Link>
          </nav>
        </header>

        {/* Main content area */}
        <main>
          <Routes>
            {/* Route to display the list of cities */}
            <Route path="/" element={<CitiesList cities={cities} />} />
            {/* Route to add a new city */}
            <Route path="/add" element={<AddCity onAddCity={addCity} />} />
            {/* Route to display details of a specific city */}
            <Route path="/city/:id" element={<CityDetails cities={cities} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
