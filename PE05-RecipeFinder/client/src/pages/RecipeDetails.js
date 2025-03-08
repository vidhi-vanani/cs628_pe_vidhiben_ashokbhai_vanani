import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Styled components
const RecipeContainer = styled.div`
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  background-color: ${props => props.delete ? '#ff4444' : '#333'};
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.delete ? '#cc0000' : '#444'};
  }
`;

// RecipeDetails componen
function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);
  
  // Delete recipe
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        console.log('Deleting recipe with ID:', id);
        const response = await axios.delete(`http://localhost:5001/api/recipes/${id}`);
        console.log('Server response:', response);
        navigate('/');
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <RecipeContainer>
      <h1>{recipe.name}</h1>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      
      <Button onClick={() => navigate(`/edit/${id}`)}>Edit Recipe</Button>
      <Button delete onClick={handleDelete}>Delete Recipe</Button>
    </RecipeContainer>
  );
}

export default RecipeDetails;