const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
// Create an instance of the Express application
const app = express();

// Morgan is a middleware for logging HTTP requests. "common" is one of the predefined log formats.
app.use(morgan('common'));

// CORS (Cross-Origin Resource Sharing) middleware allows or restricts cross-origin requests to your server.
app.use(cors());

// Import the URL routes
const QrCodeRouter = require('./routes/qrCodeRoutes');

// Configure middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define routes for the application
app.use('/api/v1', QrCodeRouter); // Use the UrlRouter for URLs starting with "/api"

// Define a catch-all route for handling 404 errors
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
