// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes.js');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api/restaurants', restaurantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
