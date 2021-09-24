const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {

        const header = req.headers.authorization;
        const token = header.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
        // TODO on en a parlé, ici tu ne fait que verifier qu'il y a un userId et tu defini req.reqdata
        req.reqdata = decodedToken;
        if (!req.reqdata.userId) {
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