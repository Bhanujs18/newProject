import React from 'react';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Chat from './components/Chat'
import AboutMe from './components/AboutMe'
import Login from './components/Login'

const App = () => {
  return (
    <>
     <Navbar />
      <Routes> 
          <Route path="signup" element={<SignUp/>} />
          <Route exact path="chat" element={<Chat />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="Login" element={<Login />} />
      </Routes>
  
   
    </>
  );
};

export default App;