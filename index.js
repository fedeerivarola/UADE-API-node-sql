const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./dbsql');

server.use(bodyParser.json()); //json bodies
server.use(bodyParser.urlencoded({ extended: true })); // encoded bodies
server.use(cors());

//
server.use('/getTable', require('./controllers/tabla'))


db.connect(function (err) {
    if (err) {
        console.error('\x1b[31m%s\x1b[0m', 'Unable to connect to MySQL.')
        process.exit(1)
    } else {
        let port = 3000;
        server.listen(port, function () {
            var datetime = new Date();
            var message = "API on Port:- " + port + " Started at :- " + datetime;
            console.log('\x1b[35m%s\x1b[0m', message);
        });
    }
});