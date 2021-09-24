const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {

        const header = req.headers.authorization;
        const token = header.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw ' Invalid user ID';
        } else {
            next();
        }
    }
    catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}