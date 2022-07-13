import React from 'react';
import { useEffect } from 'react';
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';
const AboutMe = () => 
 {
  const navigate = useNavigate();
             useEffect(() => {
                         callaboutpage(); 
                             })

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
  

                     if (res.status === 422){
                       window.alert('fail')                  }
                      }
                      
                      
                      catch (error) {
                        navigate('/login')
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