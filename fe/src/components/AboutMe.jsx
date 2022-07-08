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
    </div>
  )
}

export default AboutMe