const express=require('express');
const authcontroller=require('../controllers/auth');
const router=express.Router();
app=express();
app.set('view engine', 'ejs');
router.post('/register',authcontroller.register);
module.exports=router;