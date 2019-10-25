const express = require('express');
const server = express();
const modelo = require('../models/modelTabla.js');

server.get("/tabla", function (req, res) {
    user.getTabla(req, res);
});


module.exports = server;