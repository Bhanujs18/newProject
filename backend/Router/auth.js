const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
var cookieParser = require('cookie-parser')
router.use(cookieParser())

const bcrypt = require('bcrypt')
require('../DATABSE/db')
const authenticate = require('../middleware/authenticate')

const User = require('../models/user.js')

let truelogin;

router.post('/register', async (req, res) => {
   
 const {name , email , phone , address,  password} = req.body;
    if( !name || !email || !phone || !address  ||  !password)
        return res.status(422).json({error :" blank!!"})
try{      
     let user = await User.findOne({ email });
     if(user){
          return res.status(422).json({error :" Exist!!"})
     }

     user = new User  ({name , email , phone , address, password});
     await  user.save();
     return res.status(201).json({message : "Registered"})
}catch(err){
     console.log(err)
}

})


// login


router.post('/login', async (req, res) => {

console.log(req.body)
try{
 const { email , password}  = req.body;
 if(!email || !password){
     return res.status(400).json({error : "blank"})
 }
 const userLogin = await User.findOne({email: email});
if(userLogin){
     const isMatch  = await bcrypt.compare(password, userLogin.password)
   
     const token = await userLogin.generateAuthToken();
        console.log(token)
          res.cookie("jwtoken", token ,{
          expires:new Date(Date.now()+15000000),
          httpOnly:true,
     });

     if(!isMatch){
          return res.status(422).json({error :" error!!"})
          
     }
     else{
          truelogin = true;
          return res.status(201).json({message : "Succesfull"})
     }
}
else{
     return res.status(422).json({error :" Error!!"})
}
}
catch(err){
     console.log(err)
     return res.status(422).json({error :" Error!!"})
    }
});




router.get('/aboutme', authenticate ,(req, res) => {
     if(truelogin === true){
     res.send(req.rootUser);
     }
     else{
          res.send('error')
     }
   })
   router.get('/chat', authenticate ,(req, res) => {
   
     res.send(req.rootUser);
   })


   router.get('/logout',(req, res) => {
     res.clearCookie('jwtoken',{path:'/'});
     res.status.send('User Logout');
   })
module.exports = router;