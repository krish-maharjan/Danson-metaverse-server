const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// User authentication middleware
const authenticate = async (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization.split(' ')[1];
    console.log('Here is token ===>', token)
  
    // Verify token
    try {
      const decoded = jwt.verify(token, 'mysecretkey');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send({ message: 'Unauthorized' });
    }
  };

module.exports = authenticate;