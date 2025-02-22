import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
  const { id } = useParams(); // Extracts the city ID from the URL parameters
  const city = cities.find(c => c.id === parseInt(id)); // Finds the city with the matching ID

  if (!city) {
    return <div>City not found</div>; // Handles the case when the city is not found
  }

  return (
    <div>
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population.toLocaleString()}</p> {/* Formats population with commas */}
    </div>
  );
}

export default CityDetails;
