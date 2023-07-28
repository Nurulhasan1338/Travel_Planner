// server/models/Destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    city : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    }
  },
  description: String,
  landmarks: [String],
  weather: String,
  averageExpense: Number,
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      comment: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  photos: [String],
  tags: [String],
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
