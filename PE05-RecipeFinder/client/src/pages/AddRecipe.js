import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

// AddRecipe componen
function AddRecipe() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    servings: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      // Convert ingredients string to array and filter out empty lines
      const ingredientsArray = recipe.ingredients
        .split('\n')
        .map(item => item.trim())
        .filter(item => item.length > 0);

      const recipeData = {
        name: recipe.name.trim(),
        ingredients: ingredientsArray,
        instructions: recipe.instructions.trim(),
        cookingTime: recipe.cookingTime.trim(),
        servings: recipe.servings ? parseInt(recipe.servings) : undefined
      };

      // Log the data being sent
      console.log('Sending recipe data:', recipeData);

      const response = await axios.post('http://localhost:5001/api/recipes', recipeData);
      console.log('Server response:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding recipe:', error);
      setError(
        error.response?.data?.message || 
        'Failed to add recipe. Please check all required fields.'
      );
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
        <TextArea
          name="ingredients"
          placeholder="Ingredients (one per line)"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <TextArea
          name="instructions"
          placeholder="Cooking Instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time (e.g., 30 minutes)"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="servings"
          placeholder="Number of Servings"
          value={recipe.servings}
          onChange={handleChange}
          min="1"
        />
        <Button type="submit">Add Recipe</Button>
      </Form>
    </div>
  );
}

export default AddRecipe;