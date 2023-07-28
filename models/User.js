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
  // Add other relevant fields
});

// // Hash the password before saving
// userSchema.pre('save', async function (next) {
//   try {
//     if (!this.isModified('password')) {
//       return next();
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare passwords for authentication
// userSchema.methods.comparePassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw new Error('Authentication failed');
//   }
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
