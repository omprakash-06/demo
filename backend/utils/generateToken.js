const jwt = require("jsonwebtoken");

const generateToken = (user)=>{
    try {
        return jwt.sign({email:user.email,id:user._id},process.env.JWT_KEY);
    } catch (err) {
         console.error("JWT Error:", err);
         throw err;
    }
};

module.exports.generateToken = generateToken;