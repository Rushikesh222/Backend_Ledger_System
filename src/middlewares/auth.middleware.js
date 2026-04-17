const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


 const authMiddleware = async function authMiddleware(req, res, next) {

    const token = req.cookies.token || req.header.authorization?.split(' ')[1]
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Access, token is missing', status: "failed" }); 
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized Access, Token is invalid', status: "failed" });
    }

}

const authSystemUserMiddleware = async function authSystemMiddleware(req, res, next) {
    const token = req.cookies.token || req.header.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Access, token is missing', status: "failed" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id).select('+userSystem');
        if (!user.userSystem) {
            return res.status(403).json({ message: 'Forbidden Access, user is not a system user', status: "failed" });
        }
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized Access, Token is invalid', status: "failed" });
    }
}


module.exports = {authMiddleware, authSystemUserMiddleware};
