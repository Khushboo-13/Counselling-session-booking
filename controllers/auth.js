const mysql = require("mysql");
const jwt=require("jsonwebtoken");
const db=mysql.createConnection({
    host: process.env.dbh,
    user: process.env.dbu,
    password: process.env.dbp,
    database: process.env.db
});
var flag=0;
const express=require('express');
const e = require("express");
const router=express.Router();
app=express();
app.set('view engine', 'ejs');
exports.register= (req,res)=>
{
    console.log(req.body);
    const {_,email,password,confirm_password,i}=req.body;
    db.query('SELECT Email FROM users WHERE Email=?',[email],(error,results)=>{
    //     if(!results)
    //     {
    //         flag=1;
    //         return res.render('council.ejs',{
    //             message:'this mail address is already exits',
    //             okay: "",
    //             page2:'',
    //             userData: ''
    //         })
    //     }
    //    else
        if(password!==confirm_password)
            {
                flag=1;
                return res.render('council.ejs',{
                    message:'password do not match',
                    okay: "",
                    page2:'',
                    userData: ''
                });
                module.exports = router;
            }
    });
    if(password!==confirm_password)
    {
        flag=1;
        return res.render('council.ejs',{
            message:'password do not match',
            okay: "",
            page2:'',
            userData: ''
        });
        module.exports = router;
    }
    else
   { 
    db.query('INSERT INTO users VALUES (?,?)',[email,password],(error ,results)=>{{
        if(error) 
        console.log(error);
        else
        console.log(results);
       return res.render('council.ejs',{
            message:'You can login now',
            okay: 'yes',
            page2:'',
            userData: ''
        });
    }});}
module.exports = router;
}
