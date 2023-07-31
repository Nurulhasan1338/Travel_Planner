const express = require('express');
const crypto = require('crypto')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const fetchUser = require('../middlewares/fetchUser');
const Destination = require('../models/Destination');
const Itinerary = require('../models/Itenerary');

const JWT_SECRET = process.env.JWT_SECRET
const router = express.Router();

// Route 1: /api/itenerary/add  // No login required
router.post('/login',fetchUser ,async (req, res)=>{
    let success = false;
    try {
        const { name, startDate, endDate, activities, budget, notes } = req.body;
        const userId = req.user._id;
    
        // Create a new itinerary object
        const itinerary = new Itinerary({
          user: userId,
          name,
          startDate,
          endDate,
          activities,
          budget,
          notes,
        });
    
        // Save the itinerary to the database
        await itinerary.save();
    
        res.json({success:true, message: 'Itinerary added successfully!', itinerary });
    } catch (error) {
        res.status(500).json({success, message: "Internal Server Error ", error})
    }

})

// Route 3 : api/auth/get-user // Login required

router.post('/get-user', fetchUser, async (req, res) => {
    try {
        let userId = req.user.id;
        
        const user = await User.findById(userId).select("-password")  
        res.send(user)     
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
})



module.exports = router