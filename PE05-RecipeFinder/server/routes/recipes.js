const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single recipe
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create recipe
router.post('/', async (req, res) => {
  try {
    console.log('Received recipe data:', req.body); // Debug log

    const { name, ingredients, instructions, cookingTime, servings } = req.body;

    // Validate required fields
    if (!name || !ingredients || !instructions) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        required: ['name', 'ingredients', 'instructions'],
        received: req.body 
      });
    }

    const recipe = new Recipe({
      name,
      ingredients: Array.isArray(ingredients) ? ingredients : [ingredients],
      instructions,
      cookingTime,
      servings: Number(servings)
    });

    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error('Error creating recipe:', err); // Debug log
    res.status(400).json({ 
      message: err.message,
      error: err
    });
  }
});

// Update recipe
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    const { name, ingredients, instructions, cookingTime, servings } = req.body;
    
    if (name) recipe.name = name;
    if (ingredients) recipe.ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];
    if (instructions) recipe.instructions = instructions;
    if (cookingTime) recipe.cookingTime = cookingTime;
    if (servings) recipe.servings = Number(servings);

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete recipe
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    await recipe.deleteOne();
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;