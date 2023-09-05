const path = require('path');
const express = require('express');
const router = express.Router();

// Define routes for the home page and users page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  });
  
  router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
  });

  module.exports = router;