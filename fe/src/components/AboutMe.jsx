<<<<<<< HEAD
import React from 'react';
import Projects from './Projects';


const AboutMe = () => {
   
  return (
    <div>
        <Projects />
=======
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import {createTheme, Container } from '@mui/system';


const AboutMe = () => {
    const theme = createTheme();
  return (
    <div>
         <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      
       iencencn
      </Container>
    </ThemeProvider>
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
    </div>
  )
}

<<<<<<< HEAD
export default AboutMe;
=======
export default AboutMe
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
