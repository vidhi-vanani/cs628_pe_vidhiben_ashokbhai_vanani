import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Styles
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

// Component
function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    servings: ''
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/recipes/${id}`);
        const recipeData = response.data;
        setRecipe({
          ...recipeData,
          ingredients: recipeData.ingredients.join('\n')
        });
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/recipes/${id}`, {
        ...recipe,
        ingredients: recipe.ingredients.split('\n')
      });
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  // Handles input changes
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
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
          placeholder="Cooking Time"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="servings"
          placeholder="Number of Servings"
          value={recipe.servings}
          onChange={handleChange}
        />
        <Button type="submit">Update Recipe</Button>
      </Form>
    </div>
  );
}

export default EditRecipe;