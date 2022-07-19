import { Typography } from '@mui/material'
import React from 'react'

const Skills = () => {
  return (
    <div className='aboutupperdiv'>

<div className='pagepartion'>
<Typography><a href='photos/cv.pdf' className='downloadcv cv' download>DOWNLOAD CV </a></Typography>
        </div>
        <div className='pagepartion'>
            <div className='skiilsicons'>
        <img alt='img' className='skillIcons' src='https://icons-for-free.com/download-icon-super+tiny+icons+javascript-1324450741921820748_256.icns' />
        <img alt='img' className='skillIcons' src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' />
        </div>
        <div className='skiilsicons'>
        <img alt='img' className='skillIcons' src='https://w7.pngwing.com/pngs/241/983/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit.png' />
        <img alt='img' className='skillIcons' src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' />
         </div>
          <div className='skiilsicons'>
          <img alt='img' className='skillIcons' src='https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon-thumbnail.png' />
          <img alt='img' className='skillIcons' src='https://www.saashub.com/images/app/service_logos/196/6ve3ytysvsem/large.png?1638255215' />
          </div>
        </div>
       

    </div>
    
  )
}

export default Skills;