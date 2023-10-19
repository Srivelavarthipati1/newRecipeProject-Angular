// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.static('public'));
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/recipeBackend', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// const Recipe = mongoose.model('Recipe', {
//   id:mongoose.Schema.Types.ObjectId,
//   name: String,
//   description: String,
//   imagePath: String,
//   ingredients: [{
//     name: String,
//     amount: Number
//   }]
// });

// app.put('/api/recipes/', (req, res) => {
//     const updatedRecipeData = req.body; // New data for the recipe
  
//     // Array to store promises
//     const updatePromises = [];
  
//     for (const recipeItem of updatedRecipeData) {
//       // Specify the unique identifier (name) for the recipe
//       const recipeName = recipeItem.name;
  
//       // Fields to update
//       const updateFields = {
//         description: recipeItem.description,
//         imagePath: recipeItem.imagePath,
//         ingredients: recipeItem.ingredients,
//       };
  
//       // Create a promise to update or create the recipe
//       const updatePromise = Recipe.findOneAndUpdate(
//         { name: recipeName },
//         { $set: updateFields },
//         { new: true, upsert: true }
//       );
  
//       updatePromises.push(updatePromise);
//     }
  
//     // Use Promise.all to wait for all updates to complete
//     Promise.all(updatePromises)
//       .then((updatedRecipes) => {
//         console.log(updatePromises,"ttttttttttttttttttty")
//         // Send a single response with all updated recipes
//         return res.status(200).json(updatedRecipes);
//       })
//       .catch((err) => {
//         console.error('Error updating recipes:', err);
//         return res.status(500).json({ error: 'Failed to update recipes' });
//       });
//   });
  
//   app.get('/api/recipes', (req, res) => {
//     // Use Mongoose to fetch data from the database
//     Recipe.find({})
//       .then((recipes) => {
//         // Send the fetched recipes as a JSON response
//         console.log(recipes,"hhhhhhhhhhhhhhh");
//         return res.status(200).json(recipes);
//       })
//       .catch((err) => {
//         console.error('Error fetching recipes:', err);
//         return res.status(500).json({ error: 'Failed to fetch recipes' });
//       });
//   });
  
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });