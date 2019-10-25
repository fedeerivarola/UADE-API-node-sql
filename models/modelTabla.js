const db = require('../db.js');

exports.getTabla = function(req, res) {
    db.get().query(`SELECT campo1 FROM tabla`, function (err, results, fields) {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    })
};
