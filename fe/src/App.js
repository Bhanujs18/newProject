import React from 'react';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Chat from './components/Chat'
import AboutMe from './components/AboutMe'
<<<<<<< HEAD
import Login from './components/Login';
import './App.css';
import Home from './components/Home'
import Footer  from './components/Footer';

=======
import Login from './components/Login'
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e

const App = () => {
  return (
    <>
     <Navbar />
<<<<<<< HEAD
      <Routes className='millde'> 
         <Route path="/" element={<Home/>} />
          <Route path="register" element={<SignUp/>} />
          <Route exact path="chat" element={<Chat />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      
   
     
=======
      <Routes> 
          <Route path="signup" element={<SignUp/>} />
          <Route exact path="chat" element={<Chat />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="Login" element={<Login />} />
      </Routes>
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
  
   
    </>
  );
};

export default App;