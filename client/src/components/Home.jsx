import {  Typography } from '@mui/material'
import React from 'react';

const Home = () => {
  return (
    <div className='homeDiv'>
      <div className='dividerHome'>
                    <div className='blockHome'><Typography> <h1 className='frontText' >Hi,<br />
                    I'm Bhanu js <br />
                    Full Stack Developer</h1> </Typography>
                    </div> 
                    <div >
                   <a href='/aboutme' className='nodeco'><button className='downloadcv'><Typography>CLICK HERE FOR MORE</Typography></button> </a>
                    <br />
   </div>
                       
                  
      </div>
      
       <div className='dividerHome'>
       <img alt='img' className='imgHome' src='https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif' />
       <img alt='img' className='imgHomee' src='photos/2.png' />
       </div>
    </div>
  )
}

export default Home