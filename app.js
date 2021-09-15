require('./manager/mongodb.js');
const express = require('express');
const app = express();
const path = require('path');

const sauceRoutes = require('./routes/sauces.js');
const userRoutes = require('./routes/user.js');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('api/sauces', sauceRoutes);

app.use('api/auth', userRoutes);

module.exports = app;