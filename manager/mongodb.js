const mongoose = require('mongoose');
const authConfig = require('../auth.config');


mongoose.connect(`mongodb+srv://${authConfig.name}:${authConfig.password}@${authConfig.cluster}/${authConfig.database}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
