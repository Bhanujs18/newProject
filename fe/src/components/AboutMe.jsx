import React from 'react';
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
        
const AboutMe = () => 
 {
  const  navigate = useNavigate();
  useEffect(() => {
    
    callaboutpage();
  
    return () => {
    }
  },)
  
const callaboutpage = async() => {

    
  
     try {
         const res = await fetch('/aboutme', {
         method:"GET",
          header:{
          Accept:"application/json",
        "Content-Type": "application/json"
         },
         credentials:"include"
        });
        const data = await res.json()
        if(res.status === 401){
          console.log(data)
         navigate('/login')
        }
      }
      catch (error) {
        navigate('/login')
        console.log('error')
        }
      }
   
  return (
    <div>
        <form method="GET">
        <Projects />
        </form>
    </div>
  )

}
  
export default AboutMe;