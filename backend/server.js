
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('./db/config');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Routes
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
