const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController')
const authMiddleware = require('../middleware/authMiddleware.js')

// Define your routes here
router.get('/',authMiddleware, recipeController.getAllRecipes);
router.put('/',authMiddleware, recipeController.updateRecipes);

module.exports = router;
