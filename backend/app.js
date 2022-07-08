const express = require('express');
const path = require("path");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: './config.env' })

const port = process.env.PORT;


const User = require('./models/user')
require('./DATABSE/db.js');
app.use(express.json());
app.use(require('./Router/auth'));

const middleware = (req,res,next)=>{
    console.log('miidleware')
    next();
}

app.get('/register', (req, res) => {
  res.send('Hello Wokrld! app')
})

app.get('/offers',middleware, (req, res) => {
    res.send('Hello Wokrld! offers ')
  })

app.get('/profile', (req, res) => {
    res.send('Hello Wokrld! profile')
  })
  
app.get('/login', (req, res) => {
    res.send('Hello Wokrld! login')
  })
 
app.get('/signup', (req, res) => {
    res.send('Hello Wokrld! signup')
  })

app.use('/',(req,res)=>{
    res.send('Hello you')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})