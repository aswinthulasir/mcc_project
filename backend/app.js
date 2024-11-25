const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const genderRoutes = require('./routes/gender');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/genders', genderRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
