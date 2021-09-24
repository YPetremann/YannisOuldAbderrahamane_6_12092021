const express = require('express');
require('dotenv').config();
const router = express.Router();
const sauceCtrl = require('../controllers/sauces.js');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config.js');



router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
//router.put('/:id', auth, multer, sauceCtrl.modifySauce);
//router.delete('/:id', auth, sauceCtrl.deleteSauce);
//router.post('/:id', auth, sauceCtrl.likesDislikes);

// TODO rajouter les routes manquantes 
module.exports = router;