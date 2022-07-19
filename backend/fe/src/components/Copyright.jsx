import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

const d = new Date();
let year = d.getFullYear();
const Copyright = () => {
  return (
    <div className='copyright'>
    <div className='copyrighti'>
     
      <Typography  >Copyright©<Link to='/'  className='copyrighti'> website.com</Link> {year}</Typography>
        
    </div>
    </div>
  )
}

export default Copyright