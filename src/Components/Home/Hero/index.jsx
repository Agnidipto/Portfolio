import { useRef, useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function Hero({ projectRef, skillsAndExperienceRef, handleSnackbarOpen }) {

  const glassRef = useRef();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  const handleScroll = () => {

    const scrollPx = Math.round(document.documentElement.scrollTop);
    const winHeightPx = Math.round(document.documentElement.clientHeight);
    const scrolled = scrollPx / winHeightPx * 10;
    const res = Math.round((1 - (scrolled * 0.02)) * 1000) / 1000;
    if(res > 0.8)
    {setScale(res);}
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    setTimeout(() => {
      setAnimationState('animate');
    }, 2000);
  }, []);

  return (<>
    <div className='container'>
      <img src='/images/home/hero/image.jpg' alt='background'
        style={{ opacity: 1, zIndex:0 }}
        className='header-image'
      />

      <Box sx={{
        height:'100%',
        width:'100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        transform:`translate(-50%, -50%) scale(${scale})`
      }}
      className='centered'>
        <Grid container
          sx={{
            height: '100%',
            transition: 'transform 1000ms ease-in-out',
            transform: {
              xs: animationState === 'initial' ? 'translateY(25%)' : 'translateY(0)',
              lg: animationState === 'initial' ? 'translateX(25%)' : 'translateX(0)'
            }
          }}>
          <Grid item xs={12} lg={6}>
            <LeftContent width='100%'/>
          </Grid>
          <Grid item xs={12} lg={6}
            sx={{
              opacity: animationState === 'initial' ? 0 : 1,
              transition: 'opacity 1000ms ease-in-out',
              transitionDelay: '800ms'
            }}>
            <RightContent
              glassRef={glassRef}
              projectRef={projectRef}
              skillsAndExperienceRef={skillsAndExperienceRef}
              handleSnackbarOpen={handleSnackbarOpen}/>
          </Grid>
        </Grid>
      </Box>
    </div>

  </>);
}

export default Hero;
