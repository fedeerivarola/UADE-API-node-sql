const mysql = require('mysql2/promise');
const DB_HOST = "db4free.NET";
const DB_USER = "maquipom";
const DB_NAME = "api2c2019";
const DB_PASSWORD = "macarena01";

exports.connect = function(callback) {
    pool = mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        database: DB_NAME,
        password: DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        connectTimeout: 120000
    });

    callback()
};

exports.get = function() {
    return pool;
};