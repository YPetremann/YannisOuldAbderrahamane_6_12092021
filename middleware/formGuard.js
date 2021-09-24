module.exports = (req, res, next) => {
    try {
        // TODO c'est ici que tu ne fait que verifier que le userId est bien defini a la valeur dans le body
        if (req.reqdata.userId !== req.body.userId) {
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