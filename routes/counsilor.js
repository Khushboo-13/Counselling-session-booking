var express = require('express');
const mysql = require("mysql");
var router = express.Router();
const db=mysql.createConnection({
    host: process.env.dbh,
    user: process.env.dbu,
    password: process.env.dbp,
    database: process.env.db
});
// another routes also appear here
// this script to fetch data from MySQL databse table
router.use('/cousil', function(req, res, next) {
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    return res.render('council.ejs', { title: 'User List', userData: data});
  });
});
module.exports = router;