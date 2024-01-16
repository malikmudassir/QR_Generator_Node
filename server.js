// Import the database connection function
const connectDB = require("./config/db");

const app = require("./app");

// Define the port on which the server will listen
const PORT = process.env.PORT || 3000;

// Import and load environment variables from a .env file

const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config({ path: "../config/.env" });

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Connect to the MongoDB database
connectDB();

// Start the Express server and listen on the specified port
// SERVER LISTENING
app.listen(PORT, () => {
  console.log("server is running on port: ", PORT);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
