const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id:{
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },

  ingredients:[{  
    ing_name:{
        type: String,
        required: true
    },
    ing_amount:{
        type: Number, required: true 
    }
  }],

});

module.exports = mongoose.model('Recipes', recipeSchema);
