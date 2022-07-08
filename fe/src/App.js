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
         <Route path="/" element={<Home/>} />
          <Route path="register" element={<SignUp/>} />
          <Route exact path="chat" element={<Chat />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      
   
     
  
   
    </>
  );
};

export default App;