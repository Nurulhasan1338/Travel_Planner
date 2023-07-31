const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto')
const connectTOMongo = require('./db');
const cors = require('cors')
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cors())
app.options('*', cors())

connectTOMongo()


app.use('/api/auth', require('./routes/user'))
app.use('/api/verify', require('./routes/verify'))



// define routes

// Route - 1 Home
app.get('/', (req, res) => {
  res.send('Welcome to Travel Planner Pro!');
});


// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



