require("dotenv").config();
const User = require("../models/User");
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY


const getUserPasswordCheck = async (req, res) => {
    try{
        const {username, password} = req.body
        const userMatch = await User.find({username: username})
    
        if (!userMatch) {
            res.status(401).json({ message: 'You have entered an incorrect Username or Password.' });
            return;
}

const passMatch = await userMatch.passwordCheck(password)

if (!passMatch) {
    res.status(401).json({ message: 'You have entered an incorrect Username or Password.' });
    return;
}
if (userMatch && passMatch) {
    const token = jwt.sign({ _id: userMatch._id }, secretKey, { expiresIn: '24h' });
    
//    now it should be adding the token to the user's tokens array
    userMatch.tokens = userMatch.tokens.concat({ token });
   
    await userMatch.save();
    res.status(200).json({ user: userMatch, token });
}
}catch(err){
    console.log(err)
    res.status(500).json(err)
}
}
module.exports = getUserPasswordCheck;