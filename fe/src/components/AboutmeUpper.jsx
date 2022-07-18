import { Typography } from '@mui/material'
import React from 'react'

const AboutmeUpper = () => {
  return (
    <div className='aboutupperdiv'>
    
        <div className='pagepartion'>
          <img alt='img' className='aboutpageimg' src="photos/sa.jpg" />
        </div>
        <div className='pagepartion'>
          <Typography ><p className='abouttext'>Hello, I'm Bhanu Pratap Singh. I'm an innovative and dedicated developer.
                                            I enjoy the challenge of finding unique ways while developing.
                                            I love to create websites and creating unique user interfaces.
                                            </p>
                                            
                                            </Typography>
        </div>

    </div>
    
  )
}

export default AboutmeUpper