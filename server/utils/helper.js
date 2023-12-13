require("dotenv").config(
    {path: '../.env'}
);
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const jwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        
        return res.status(401).json({ message: 'No token provided' })

    }
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: 'Unauthorized' })
        }
        req.user = user
        next()
    })
}
module.exports = jwtAuth;