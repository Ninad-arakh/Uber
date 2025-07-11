const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.userAuth = async (req, res, next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({ message : "Unauthorized!"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({ message : "Unauthorized!"});
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    }
    catch(err){
        return res.status(401).json({ message : "Unauthorized!"});
    }
}

module.exports.captainAuth = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({ message : "Unauthorized!"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({ message : "Unauthorized!"});
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        return next();
    }
    catch(err){
        return res.status(401).json({ message : "Unauthorized!"});
    }
}   