const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcrypt')
require('../DATABSE/db')

const User = require('../models/user.js')

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
   
     const token = userLogin.generateAuthToken();
     console.log(token)
     res.cookie("jwtoken", token,{
     expires: new Date(Date.now() + 172800000),
     httpOnly: true
     });

     if(!isMatch){
          return res.status(422).json({error :" error!!"})
          console.log(isMatch)
     }
     else{
          return res.status(201).json({message : "Succesfull"})
     }
}
else{
     return res.status(422).json({error :" Error!!"})
}
}
catch(err){
     console.log(err)
    }
});


module.exports = router;