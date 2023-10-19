const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
      // Get the token from the request headers
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'secrettoken');
      req.userData = decoded; // Store the user data in the request object
  
      next(); // Continue to the next middleware or route handler
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  };
  