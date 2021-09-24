const Sauce = require('../models/sauces.js');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    console.log(req.body.userId);
    const sauce = new Sauce({
        // TODO Fait attention aux objet que tu utilise
        ...sauceObject,
        // TDOD fait attention a la case
        imageUrl: `${req.protocol}:/${req.get('host')}/images/${req.file.filename}`,
    });

    sauce.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};
/*
exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageURL: `${req.protocol}:/${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            const filename = sauce.imageURL.split('/image/')[1];
            fs.unlink(`images/${filename}`, () => {

                sauce.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet suprimmé' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(400).json({ error }));
};

*/
exports.getAllSauces = (req, res, next) => {
    // TDOD fait attention a la case
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
};
exports.getOneSauce = (req, res, next) => {
    // TDOD fait attention a la case
    Sauce.findOneAndRemove({ _id: req.params.id })
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({ error }));
};
/*
exports.likesDislikes = (req, res, next) => {
    sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            switch (req.body.likes) {
                case -1:
                    if (req.body.like == -1) {
                        sauce.dislikes++;
                        sauce.usersDisliked.push(req.body.userId);
                        sauce.save();
                    }
                    break;
                case 1:
                    if (req.body.like == 1) {
                        sauce.likes++;
                        sauce.usersLiked.push(req.body.userId);
                        sauce.save();
                    }
                    break;
                case 0:
                    if (req.body.like == 0) {
                        if (sauce.usersLiked.IndexOf(req.body.userId) != -1) {
                            sauce.likes--;
                            sauce.usersLiked.splice(sauce.usersLiked.indexOf(req.body.userId), 1);
                        } else {
                            sauce.dislikes--;
                            sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(req.body.userId), 1);
                        }
                        sauce.save();
                    }
                    break;
            }
            res.status(200).json({ message: 'like pris en compte' })
        })
        .catch(error => res.status(500).json({ error }))
};*/