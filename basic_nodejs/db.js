const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection url
// const mongodbURL = process.env.MONGODB_LOCAL_URL;
 const mongodbURL = process.env.MONGODB_ATLAS_URL;

// Set up mongodb connection
mongoose.connect(mongodbURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

 
// Get the default connection 
// Mongoode maintains a default connection object representing the mongodb connection 
const db = mongoose.connection;

// Define event listeners for database connection 
db.on('connected', () => {
    console.log('Connected to mongodb server');
});

db.on('error', (err) => {
    console.error('Mongodb connection error :',err);
});

db.on('disconnected', () => {
    console.log('Mongodb dusConnected');
});


// Export the database connection 
module.exports = db;