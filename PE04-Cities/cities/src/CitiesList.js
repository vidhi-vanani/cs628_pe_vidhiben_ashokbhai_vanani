import { Link } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div>
      <h2>Cities List</h2>
      <div>
        {cities.map(city => (
          <div key={city.id}> {/* Unique key for each city to optimize rendering */}
            <Link to={`/city/${city.id}`}>{city.name}</Link> {/* Creates a clickable link to the city details page */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitiesList;
