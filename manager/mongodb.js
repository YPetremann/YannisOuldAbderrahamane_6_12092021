const mongoose = require('mongoose');
// TODO met toujours l'extention lorsque tu require
// TODO met tes configuration dans un dossier config
const authConfig = require('../config/auth.config.js');


mongoose.connect(`mongodb+srv://${authConfig.name}:${authConfig.password}@${authConfig.cluster}/${authConfig.database}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
