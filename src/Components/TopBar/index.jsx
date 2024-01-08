// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ScrollProgress from './ScrollProgress';

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './TopBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { unloadPage } from '../../reducers/initloadSlice';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {

  const location = useLocation();
  const [home, setHome] = useState(true)
  const [opacity, setOpacity] = useState(1)
  const [width, setWidth] = useState(270)

  const initLoad = useSelector(state => state.initload.value)

  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname === '/') {
      if (home===false)
        setOpacity(0)
        setTimeout(() => {
          setHome(true)
          setOpacity(1)
          setWidth(270)
        }, 500)
    } else {
      if (home===true) 
        setOpacity(0)
        setTimeout(() => {
          setHome(false)
          setOpacity(1)
          setWidth(90)
        }, 500)
    }
  }, [location])

  const navigate = useNavigate();

  const handleViewProjects = (event) => {
    navigate('/projects')
  };

  const HomeButtonOnClick = (event) => {
    if(props.location!=='/') navigate('/')   
  }

  const ProjectButtonOnClick = (event) => {
    if(props.projectRef.current !== undefined ) {
      props.projectRef.current.scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }

  const SkillButtonOnClick = (event) => {
    if(props.skillsAndExperienceRef.current !== undefined ) {
      props.skillsAndExperienceRef.current.scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }

  const AboutButtonOnClick = (event) => {
    if(props.aboutMeRef.current !== undefined ) {
      props.aboutMeRef.current.scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }

  ////////////////// Scroll Position Fading Information

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  }; 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var color = Math.min(scrollPosition/150,1)

  var shadow1opacity = Math.min(scrollPosition/750, 0.2)
  var shadow2opacity = Math.min(scrollPosition/1071.42, 0.14)
  var shadow3opacity = Math.min(scrollPosition/1250, 0.12)
  var boxShadow= `0px 2px 4px -1px rgba(0,0,0,${shadow1opacity}), 0px 4px 5px 0px rgba(0,0,0,${shadow2opacity}), 0px 1px 10px 0px rgba(0,0,0,${shadow3opacity})`;

  return (<>

    <AppBar position="sticky" 
    sx ={{height: !initLoad? 65 : 0,
      opacity : !initLoad? 1 : 0, 
      background: `rgba(18, 18, 18, ${color})`, boxShadow:boxShadow}}
      className='main-bar'
    >
      
      {/* <motion.div style={{scaleX:scrollYProgress, borderBottom:'2px solid white'}} className='progress-bar'/>
      <p>{hookedYPostion}</p> */}
      
      <Container maxWidth="xl">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              // height:'5vh',
              textDecoration: 'none',
            }}
          >
            Agnidipto Sinha
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, marginTop:1, marginLeft:1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={props.toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon style={{marginLeft:-20}}/>
            </IconButton>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              // mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              marginTop:1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span onClick={(e) => navigate('/')} style={{cursor:'pointer'}}>Agni</span> 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{opacity:opacity, width:width}} className='main-tabs no-overflow'>
            {!home ?
              <Button
              onClick={(e) => HomeButtonOnClick(e)}
              // className='no-overflow'
              sx={{ my: 2, color: 'white', display: 'block', minWidth:90 }}
            >
              Home
            </Button>: 
            <>
              <Button
              onClick={(e) => ProjectButtonOnClick(e)}
              // className='no-overflow'
              sx={{ my: 2, color: 'white', display: 'block', minWidth:90 }}
              >
                Projects
              </Button>
              <Button
              onClick={(e) => SkillButtonOnClick(e)}
              // className='no-overflow'
              sx={{ my: 2, color: 'white', display: 'block', minWidth:90 }}
              >
                Skills
              </Button>
              <Button
              onClick={(e) => AboutButtonOnClick(e)}
              // className='no-overflow'
              sx={{ my: 2, color: 'white', display: 'block', minWidth:90 }}
              >
                About Me
              </Button>
            </>}
            </div>
            <Divider orientation="vertical" flexItem sx={{marginLeft:'1%', marginRight:'2%', height:65}}/>
            <Button
              onClick={handleViewProjects}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              View Projects
            </Button>
            {/* <Divider orientation="vertical" flexItem sx={{marginLeft:'1%', marginRight:'2%', height:65}}/>
            <Button
            onClick={(e) => dispatch(unloadPage())}
            sx={{ my: 2, color: 'white', display: 'block' }}>
              InitLoad
            </Button> */}
            
          </Box>

          <Box sx={{ flexGrow: 0.3 }}>
            {'    '}
          </Box>
        </Toolbar>
      </Container>
      <ScrollProgress />
    </AppBar>
    </>
  );
}
export default React.memo(ResponsiveAppBar);