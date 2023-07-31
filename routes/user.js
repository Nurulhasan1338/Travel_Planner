const express = require('express');
const crypto = require('crypto')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const fetchUser = require('../middlewares/fetchUser');

const JWT_SECRET = process.env.JWT_SECRET
const router = express.Router();

// Route 2: /api/auth/login  // No login required
router.post('/login',async (req, res)=>{
    let success = false;
    try {
        const {email, password} = req.body;
        console.log(req.body)
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success, error : 'Invalid Credentials'})
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({success, error: "Invalid Credentials"})
        }
        const data = {
            user : {
                id : user.id
            }
        }
        const authToken = JWT.sign(data, JWT_SECRET)
        success = true;
        res.json({success, authToken})
    } catch (error) {
        res.status(500).json({success:false, message: "Internal Server Error ", error})
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