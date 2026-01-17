const mongoose = require('mongoose');

// define the mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/Hotels' 

// Set up mongodb connection
mongoose.connect(mongoURL)
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