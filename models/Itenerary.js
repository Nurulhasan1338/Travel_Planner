// server/models/Itinerary.js
const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  activities: [
    {
      name: {
        type: String,
        required: true,
      },
      destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      notes: String,
    },
  ],
  budget: {
    type: Number,
    required: true,
  },
  notes: String,
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
