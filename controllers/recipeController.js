const Recipe = require('../models/recipeSchema');

exports.getAllRecipes = (req, res) => {
  Recipe.find({})
        .then((recipes) => {
          // Send the fetched recipes as a JSON response
          console.log(recipes,"hhhhhhhhhhhhhhh");
          return res.status(200).json(recipes);
        })
        .catch((err) => {
          console.error('Error fetching recipes:', err);
          return res.status(500).json({ error: 'Failed to fetch recipes' });
        });
};

exports.updateRecipes = (req, res) => {
  const updatedRecipeData = req.body;

  Recipe.find({})
  .then((dbRecipes)  => {
 
    // Find recipes to delete by comparing with the names in the input array
    const recipesToDelete = dbRecipes.filter((dbRecipe) => {
      return !updatedRecipeData.some((updatedRecipe) => updatedRecipe.name === dbRecipe.name);
    });

    // Delete recipes that are not in the input array
    const deletePromises = recipesToDelete.map((recipeToDelete) => {
      return Recipe.findOneAndDelete({ name: recipeToDelete.name });
    });

    // Update recipes in the database
    const updatePromises = updatedRecipeData.map((recipeItem) => {
      const recipeName = recipeItem.name;
      const updateFields = {
        description: recipeItem.description,
        imagePath: recipeItem.imagePath,
        ingredients: recipeItem.ingredients,
      };

      return Recipe.findOneAndUpdate(
        { name: recipeName },
        { $set: updateFields },
        { new: true, upsert: true }
      );
    });

    // Execute all delete and update promises
    const allPromises = [...deletePromises, ...updatePromises];

    Promise.all(allPromises)
    .then((results) => {
      return res.status(200).json(results);
    })
    .catch((err) => {
      console.error('Error updating recipes:', err);
      return res.status(500).json({ error: 'Failed to update recipes' });
    });
})
.catch((err) => {
  console.error('Error fetching recipes:', err);
  return res.status(500).json({ error: 'Failed to fetch recipes' });
});
};



// DELETE route to delete a recipe by ID
// exports.delete('/:recipeName', async (req, res) => {
//   const { recipeName } = req.params;

//   try {
//     // Find the recipe by ID and remove it
//     const recipe = await Recipe.findByIdAndRemove(recipeName);

//     if (!recipe) {
//       return res.status(404).json({ message: 'Recipe not found' });
//     }

//     return res.status(200).json({ message: 'Recipe deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });



