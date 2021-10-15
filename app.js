const express=require('express');
const path = require('path');
const app = express();
const mysql=require("mysql");
const dotenv=require("dotenv");
const body_parser=require("body-parser");
var cookie_Parser = require('cookie-parser');
dotenv.config({path:'./.env'});
var router = express.Router();
const db=mysql.createConnection({
    host: process.env.dbh,
    user: process.env.dbu,
    password: process.env.dbp,
    database: process.env.db
});
app.set('views engine','hbs');
app.set('view engine', 'ejs');
const publicdirectory = path.join(__dirname,'./public')
app.use(express.static(publicdirectory));
app.use(express.urlencoded({extented:true}));
app.use(express.json());
db.connect((error)=>
{
    if(error){
        console.log(error);
    }
    else
    console.log("mysql connect");
})
app.get("/",(req,res)=>
{
    //res.sendFile(path.join(__dirname+'/form.html'));
    res.render("council.ejs",{
        message:'',
        okay: "",
        page2:'',
        userData: ''
    })
});
app.use("/users/edit",(req,res) =>
{
    var s=req.url;
    s=s.slice(1,s.length);
    sql="UPDATE users SET Password = 'Khushboo' where Name = "+"\'"+s+"\'";
    db.query(sql);
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.render('council.ejs',{
            message:'',
            okay: "",
            page2:'',
            userData: data
        });
})
});

app.use('/auth',require('./routes/auth'));
app.use('/login',require('./routes/login'));
// app.use("/auth/register",(req,res)=>
// {
//     console.log(req.body);
//     const {_,email,password,confirm_password,i}=req.body;
//     return res.render('form.hbs',{
//         message:'password'
//     })
// })
app.use("/login/logout",(req,res) =>
{
    res.render("council.ejs",{
        message:'',
        okay: "",
        page2:'',
        userData: ''
    })
});

app.listen(3001,()=>{
    console.log("server started at 3001")
});