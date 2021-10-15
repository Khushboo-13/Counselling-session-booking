const mysql = require("mysql");
var express = require('express');
var router = express.Router();
const jwt=require("jsonwebtoken");
const db=mysql.createConnection({
    host: process.env.dbh,
    user: process.env.dbu,
    password: process.env.dbp,
    database: process.env.db
});
exports.loginuser= (req,res)=>
{
    console.log(req.body);
    const {username,password,login}=req.body;
    console.log(username);
    console.log(password);
    console.log(login);
// another routes also appear here
// this script to fetch data from MySQL databse table
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    return res.render('council.ejs', { message:'',
    okay: "",
    page2:'',
    userData: data});
});
module.exports = router;
}