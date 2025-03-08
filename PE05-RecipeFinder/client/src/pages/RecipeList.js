import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Styled components
const RecipeCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const RecipeLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #666;
  }
`;

// RecipeList componen
function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <RecipeCard key={recipe._id}>
          <RecipeLink to={`/recipe/${recipe._id}`}>
            <h2>{recipe.name}</h2>
          </RecipeLink>
          <p>Cooking Time: {recipe.cookingTime}</p>
          <p>Servings: {recipe.servings}</p>
        </RecipeCard>
      ))}
    </div>
  );
}

export default RecipeList;