const express = require('express');
const path = require("path");
const dotenv = require("dotenv");



const app = express();


dotenv.config({ path: './config.env' })

const port = process.env.PORT;


const User = require('./models/user')
require('./DATABSE/db.js');
app.use(express.json());
app.use(require('./Router/auth'));

// const middleware = (req,res,next)=>{
//     console.log('miidleware')
//     next();
// }

// app.get('/register', (req, res) => {
//   res.send('Hello Wokrld! app')
// })



// app.get('/aboutme', (req, res) => {
//     res.send('Hello Wokrld! profile')
//   })
  
// app.get('/login', (req, res) => {
//     res.send('Hello Wokrld! login')
//   })
 
// app.get('/signup', (req, res) => {
//     res.send('Hello Wokrld! signup')
//   })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})