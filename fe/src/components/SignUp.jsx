<<<<<<< HEAD
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Alert, Button, Typography } from '@mui/material';
import '../App.css';



const SignUp = () => {

const [user, setUser] = useState({
  name:"",phone:"",email:"",address:"",password:""
});

let name, value;

const handleInputs = (e) =>{
console.log(e)
name=e.target.name;
value=e.target.value;

setUser({...user, [name]:value})

}
const PostData = async (e)  =>{
  e.preventDefault();
  const { name , phone , email , address , password} = user
  const res = await fetch('./register',{
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name , phone , email , address , password
    })
  })
   const data = res.json();
   if(res.status === 422 || !data){
    window.alert("Invalid registration");
    <Alert severity="success">This is a success message!</Alert>
   }
   else{
    window.alert("Registered Successfully")
   }


}

  return (
    <div className='signup'>

      <form method='POST'  className='inputSignUp' >

        <div className='signUpBox'>
           <Typography  className='headingSignUp' fontSize='large' >Sign Up</Typography>
              <Grid className='grid' item xs={12}>
                <TextField
                 className='inputSignUp'
                  required
                  fullWidth
                  name="name"
                  label="name"
                  type="name"
                  id="name"
                  autoComplete="new-password"
                  value={user.name}
                  onChange={handleInputs}
                  />
              </Grid>
              <Grid className='grid' item xs={12}>
                <TextField
                className='inputSignUp'
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="new-password"
                  value={user.phone}
                  onChange={handleInputs}/>
              </Grid>
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
                  value={user.email}
                  onChange={handleInputs}/>
              </Grid>
              <Grid className='grid' item xs={12}>
                <TextField
                  required
                  className='inputSignUp'
                  fullWidth
                  name="address"
                  label="address"
                  type="address"
                  id="address"
                  autoComplete="new-password"
                  value={user.address}
                  onChange={handleInputs}/>
              </Grid>
              <Grid className='grid' item xs={12}>
                <TextField
                  required
                  className='inputSignUp'
=======
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="!#">
        Bhanujs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='signupbox'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
<<<<<<< HEAD
                  value={user.password}
                  onChange={handleInputs}/>
              </Grid>
              <Grid className='grid' id='submit' >
              <Button type='submit' sx={{color:'inherit'}} onClick={PostData}>Submit</Button>
              </Grid>
              </div>
              </form>
    </div>
  )
}

export default SignUp;
=======
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
