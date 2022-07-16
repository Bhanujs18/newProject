import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';



const Login = () => {
  
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const loginUser = async (e)  =>{
    e.preventDefault();
    
const res = await fetch('./login',{
      method: "POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
      email ,password
      })
    })
    const data = res.json();
    if(res.status === 400 || res.status === 422 || !data){
     window.alert("Invalid Login");
    }
    else{
     window.alert("Login Successfully")
    }
 
  
  }


  return (
<div>


<div className='signup'>

<form method='POST'  className='inputSignUp' >

  <div className='signUpBox'>
     <Typography  className='headingSignUp' fontSize='large' >Login</Typography>
       
       
        <Grid className='grid' item xs={12}>
          <TextField
            required
            className='inputSignUp'
            fullWidth
            name="email"
            label="email"
            type="email"
            id="email"
            autoComplete="new-password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Grid>
      
        <Grid className='grid' item xs={12}>
          <TextField
            required
            className='inputSignUp'
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
           
            value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
        </Grid>
        <Grid className='grid' id='submit' >
        <Button type='submit' sx={{color:'inherit'}} onClick={loginUser}>Submit</Button>
        </Grid>
        </div>
        </form>
</div>


  
  </div>)
}

export default Login