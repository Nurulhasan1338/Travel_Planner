const express = require('express');
const crypto = require('crypto')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const fetchUser = require('../middlewares/fetchUser');
const Destination = require('../models/Destination');

const JWT_SECRET = process.env.JWT_SECRET
const router = express.Router();

// Route 1: /api/destination/getSearch  // No login required
router.post('/getSearch',async (req, res)=>{
    let success = false;
    try {
        const { query } = req.query;
        const destinations = await Destination.find({
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { landmarks: { $regex: query, $options: 'i' } },
        ],
        });
        res.json({success:true, destinations});
    } catch (error) {
        res.status(500).json({success, message: "Internal Server Error ", error})
    }

})

// Route 2: /api/destination/getDestinationById  // No login required
router.post('/getDestinationById',async (req, res)=>{
    let success = false;
    try {
        const { id } = req.params;
        const destination = await Destination.findById(id);
        if (!destination) {
        return res.status(404).json({success, error: 'Destination not found' });
        }
        res.json({success:true,destination});
    } catch (error) {
        res.status(500).json({success, message: "Internal Server Error ", error})
    }

})

// Route 3 : api/auth/get-user // Login required

router.post('/get-user', fetchUser, async (req, res) => {
    try {
        const { destinationId, userId, rating, comment } = req.body;

        // Check if the destination exists
        const destination = await Destination.findById(destinationId);
        if (!destination) {
          return res.status(404).json({success, error: 'Destination not found' });
        }
    
        // Add the review to the destination's reviews array
        destination.reviews.push({
          user: userId,
          rating,
          comment,
        });
    
        // Calculate the updated average rating for the destination
        const totalRatings = destination.reviews.reduce((acc, review) => acc + review.rating, 0);
        const averageRating = totalRatings / destination.reviews.length;
        destination.averageRating = averageRating;
    
        // Save the updated destination to the database
        await destination.save();
    
        res.json({success: true, destination});    
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
})



module.exports = router