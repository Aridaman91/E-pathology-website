const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors());

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.use(bodyParser.json());
require('./backend/connect.js'); // Ensure this connects to your MongoDB properly

// Import routes
const TestRoutes = require("./backend/testroutes.js");
const PatientRoutes=require("./backend/patientroute.js");


// Use routes
app.use('/test', TestRoutes);
app.use('/patient', PatientRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`); // Use backticks for template literals
});
