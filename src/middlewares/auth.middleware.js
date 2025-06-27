
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = jwt.verify(accessToken, 'your_secret_key');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

module.exports = {
    verifyToken
};