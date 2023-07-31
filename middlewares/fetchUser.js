const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');

    if(!token){
        return res.status(401).send({error : "Unauthorized user"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        // console.log(data)
        req.user = data.user
        next()
    } catch (error) {
        return res.status(401).send({error : "Unauthorized user"})
    }
}

module.exports = fetchUser