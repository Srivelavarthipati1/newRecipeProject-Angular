
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routers/authRouter');
const recipeRoutes = require('./routers/recipeRoutes');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recipeBackend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}) 


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/auth', userRoutes);
app.use('/api/recipes', recipeRoutes);
 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

 







