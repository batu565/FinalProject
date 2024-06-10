// server.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/news_portal_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Register endpoint
app.post('/register', async (req, res) => {
  try {
    // Extract user information from request body
    const { email, username, password } = req.body;
    // Check if user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create a new user instance
    const newUser = new User({ email, username, password });
    // Save the new user to the database
    await newUser.save();
    // Return success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    // Handle errors
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
