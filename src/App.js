import React from 'react';
import { Button, Typography } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import Config from './Config';
import NavBar from './NavBar';
import About from './About';
import { saveAs } from 'file-saver';
import Projects2 from './Projects2'
import SpeedDial from '@mui/material/SpeedDial';
import GitHubIcon from '@mui/icons-material/GitHub';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200, // Offset (in pixels) from the top of the page for animations to trigger
      duration: 800, // Duration of animation (in milliseconds)
      easing: 'ease-in-out', // Easing type
      delay: 100, // Delay between each animation (in milliseconds)
    });
  }, []);
  
  const handleDownload = () => {
    const cvUrl = 'https://drive.google.com/file/d/1JF3ZOr-Vd3Z8ZO8ieUfzAXERjuzhTe9c/view';
    try {
      saveAs(cvUrl,'nandhini');
    } catch (error) {
      console.error('Error downloading file:', error);
      // Handle the error as needed (e.g., display an error message to the user)
    }
  };
  

  const [direction] = React.useState('down');
  const actions = [
    { icon: <GitHubIcon />, href: 'https://github.com/Nandhini6132' },
    { icon: <LinkedInIcon /> },
    { icon: <FacebookIcon /> },
    { icon: <EmailIcon /> },
  ];
  const blobRef = useRef();


  const handleMouseMove = (event) => {
    if (blobRef.current) {
      let half = 75;
      blobRef.current.style.left = `${event.clientX - half}px`;
      blobRef.current.style.top = `${event.clientY - half}px`;
    }
  };

  window.addEventListener('mousemove', handleMouseMove);



  return (

    <div className="App">

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        className='speedDial mt-2 me-5'

        sx={{
          position: 'fixed',
          bottom: '15px',
          right: '10px',
        
        }}
        icon={'Get in Touch'}
        FabProps={{ sx: { border:'1px solid white',padding:'40px','&:hover': { backgroundColor: 'red' } } }} //not working
        direction='up'


      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            direction={direction}
        
            FabProps={{ sx:  {border:'1px solid pink',padding:'20px', '&:hover': { backgroundColor: 'transparent' } } }}
            onClick={() => window.location.href = action.href}
          />
        ))}
      </SpeedDial>
      {/* <div className="blob" ref={blobRef}></div> */}
      <div className="home" >
        <Config />
        <NavBar />


        <div className="container intro mt-5">
          <div className="row ">
            <div className="col-lg-7">
              <h3 className="text-light">Hi, I am</h3>
              <Typography variant='h2' className='shine text-light'>NANDHINI SARAVANAN </Typography>
              <Typography variant='h4' className="gradient-bg">Front-End Developer</Typography>

              <Typography variant='subtitle1' sx={{ fontSize: '20px' }} className="text-light mt-3 mb-4">
                Dedicated frontend developer transforming designs into captivating web experiences with flair and precision. Committed to creating seamless, user-friendly interfaces that captivate and delight.</Typography>

              <Button variant="outlined" size='large' TouchRippleProp s={{ style: { color: '#0fe1fa' } }} sx={{
                border: '1px solid #0fe1fa', cursor: 'pointer', color: 'white', textTransform: 'none', '&:hover': {
                  border: '1px solid #0fe1fa' 
                }
              }} onClick={handleDownload}>Download CV</Button>
            </div>
          </div>
        </div>
      </div>

   
      
    </div>

  );
}

export default App;





