import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
useEffect(() => {

        fetch('/logout', {
        method:"GET",
         header:{
         Accept:"application/json",
       "Content-Type": "application/json"
        },
        credentials:"include",
       })
       .then((res) => {
            navigate('/login');
            window.alert("logout Succesfully")
       })
});


  return (
    <div>
        
    </div>
  )
}

export default Logout