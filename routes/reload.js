const express=require('express');
const authcontroller=require('../controllers/login');

const router=express.Router();
app=express();
app.set('view engine', 'hbs');
router.post('/loginuser',authcontroller.loginuser);

module.exports=router;