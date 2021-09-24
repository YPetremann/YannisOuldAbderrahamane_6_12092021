module.exports = (req, res, next) => {
    try {
        req.reqdata.userID = req.body.userId;
        if (req.body.userId !== req.data.userId) {
            throw `Invalide user ID`;
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error(`Invalid request`)
        });
    }
};