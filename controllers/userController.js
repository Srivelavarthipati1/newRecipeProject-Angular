// userController.js
const jwt = require('jsonwebtoken');

const User = require('../models/userSchema'); // Import your User model

exports.signup = (req, res) => {
  console.log("signupppppppppppppppp");
  const { email, password } = req.body;
 
  // Use promises to handle the Mongoose query
  User.findOne({ email }) // Find a user with the provided email
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).json({ error: 'Email is already in use' });
      }

      // If the email is not in use, create a new user
      const user = new User({ email, password });

      return user.save();
    })
    .then(() => {
      return res.status(201).json({ message: 'User created successfully' });
    
    })
    .catch((err) => {
      console.log('Error in user signup:', err);
      return res.status(500).json({ error: 'Failed to create user' });
    });

  }

    exports.login = (req, res) => {
      console.log("loginnnnnnnnnnnnn");
      const { email, password } = req.body;
    
      User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: 'Authentication failed. User not found.' });
        }
    
        user.comparePassword(password)
        .then((isMatch) => {
          if (isMatch) {
            // Generate a JWT token
            const token = jwt.sign(
              {
                email: user.email,
                userId: user._id.toString(),
              },
              'secrettoken',
              {
                expiresIn: '1h', // Token will expire in 1 hour
              }
            );
              console.log(token);
            return res.status(200).json({
              message: 'Authentication successful',
              email: user.email,
              userId: user._id.toString(),
              token: token,
              expiresIn: 3600, // 1 hour in seconds
            });
          } else {
            return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
          }
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        });
    });
};



    



//     exports.post('/login', (req, res) => { 
//       const { email, password } = req.body;
    
//       User.findOne({ email }, (err, user) => {
//         if (err) {
//           return res.status(500).json({ error: 'Internal Server Error' });
//         }
    
//         if (!user) {
//           return res.status(401).json({ error: 'Authentication failed. User not found.' });
//         }
    
//         user.comparePassword(password, (err, isMatch) => {
//           if (err) {
//             return res.status(500).json({ error: 'Internal Server Error' });
//           }
    
//           if (isMatch) {
//             return res.status(200).json({ message: 'Authentication successful' });
//           } else {
//             return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
//           }
//         });
//       });
//     });
