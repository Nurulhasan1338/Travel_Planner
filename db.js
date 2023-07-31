const mongoose = require('mongoose')
require('dotenv').config()

const URL =  process.env.MONGO_URL

const connectTOMongo = () => {
    mongoose.connect(URL)
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));
}

module.exports = connectTOMongo