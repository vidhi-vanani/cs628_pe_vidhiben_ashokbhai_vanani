import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ onAddCity }) {
  // State hooks to store input values for name, country, and population
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  
  // Hook for programmatic navigation after form submission
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Calls the parent function to add the new city with parsed population
    onAddCity({
      name,
      country,
      population: parseInt(population)
    });

    // Redirects back to the cities list after adding a city
    navigate('/');
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Updates name state on input change
            required
          />
        </div>
        <div>
          <label>Country: </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)} // Updates country state on input change
            required
          />
        </div>
        <div>
          <label>Population: </label>
          <input
            type="text"
            value={population}
            onChange={(e) => setPopulation(e.target.value)} // Updates population state on input change
            required
          />
        </div>
        <button type="submit">Add City</button> {/* Triggers form submission */}
      </form>
    </div>
  );
}

export default AddCity;
