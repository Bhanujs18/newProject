import React from 'react';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Chat from './components/Chat'
import AboutMe from './components/AboutMe'
import Login from './components/Login';
import './App.css';

import Home from './components/Home'
import Footer  from './components/Footer';


const App = () => {
  return (
    <>
     <Navbar />
      <Routes className='millde'> 
         <Route  exact path="/home" element={<Home/>} />
          <Route exact path="register" element={<SignUp/>} />
          <Route exact path="chat" element={<Chat />} />
          <Route exact path="aboutme" element={<AboutMe />} />
          <Route exact path="login" element={<Login />} />
      </Routes>
      <Footer />
      
   
     
  
   
    </>
  );
};

export default App;