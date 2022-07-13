<<<<<<< HEAD
import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';



const Login = async () => {
 
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch('/login',
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = res.json();
    if(res.status === 400 || !data){
     window.alert("Invalid Login");
    }
    else{
     window.alert("Login Successfully")
    }

  }


  return (
    <div className='loginDiv'>
    <div className='login'>
      <form method='POST'>
        <Grid className='gridlogin'>
            <Typography>Login</Typography>
        </Grid>
      <Grid className='gridlogin' item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="new-password"
                 />
              </Grid>
              <Grid className='gridlogin' item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
              />
              </Grid>
              <Grid className='gridlogin' id='submit' >
              <Button type='submit'
              onClick={loginUser}
              sx={{color:'inherit'}}>Submit</Button>
              </Grid>
              </form>
      
    </div>
    </div>
=======
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
  )
}

export default Login