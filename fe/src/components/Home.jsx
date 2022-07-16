import {  Typography } from '@mui/material'
import React from 'react';

const Home = () => {
  return (
    <div className='homeDiv'>
      <div className='dividerHome'>
                    <div className='blockHome'><Typography> <h1 className='frontText' >Hi,<br />
                    I'm jyfuy <br />
                    Full Stack Developer</h1> </Typography>
                    </div> 
                    <div >
                   <a href='/aboutme' className='nodeco'><button className='downloadcv'><Typography>CLICK HERE FOR MORE</Typography></button> </a>
                    <br />
   </div>
                       
                  
      </div>
      
       <div className='dividerHome'>
       <img alt='img' className='imgHome' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76612106-8aba-4097-9619-baee44cc3b5f/dcqtjmi-de587a3c-b962-4812-86e6-61772578afea.png/v1/fill/w_1920,h_3200,strp/boruto_naruto_next_generation_momoshiki__topless__by_iennidesign_dcqtjmi-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIwMCIsInBhdGgiOiJcL2ZcLzc2NjEyMTA2LThhYmEtNDA5Ny05NjE5LWJhZWU0NGNjM2I1ZlwvZGNxdGptaS1kZTU4N2EzYy1iOTYyLTQ4MTItODZlNi02MTc3MjU3OGFmZWEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Oiz0MYedGAu7pNw4UPNm9Yf06s5pOBhWRMU6uRaxrSY' />
       </div>
    </div>
  )
}

export default Home