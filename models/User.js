// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: String,
  favoriteDestinations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination',
    },
  ],
  itineraries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Itinerary',
    },
  ],
  firstName: String,
  lastName: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  dateOfBirth: Date,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
