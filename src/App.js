import './App.css';
import {useState, useEffect, lazy, Suspense, useRef} from 'react';
import {Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

import TopBar from '../src/Components/TopBar';
import Home from '../src/Components/Home';
import Footer from '../src/Components/Footer';
import ProjectPage from '../src/Components/ProjectPage';
import ProjectInformation from './Information';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';

const ReactImage = require('./Components/Home/SkillsAndExperience/SkillsImages/react.jpg')
const SpringBootImage = require('./Components/Home/SkillsAndExperience/SkillsImages/spring-boot.jpg')
const JavaImage = require('./Components/Home/SkillsAndExperience/SkillsImages/java.jpg')
const PythonImage = require('./Components/Home/SkillsAndExperience/SkillsImages/python.jpg')

const Projects = lazy(() => import('./Components/Projects'));

const LazyLoading = (<Box sx={{ display: 'flex' }}>
<CircularProgress />
</Box>)

const LazyLoadingFull = (<Box sx={{height:'100vh', marginTop:'-65px' }} className='container'>
  <div className='container' style={{height:'100%'}}>
    <div className='centered'>
      <CircularProgress/>
    </div>
  </div>
</Box>)

var skills = ['All']
ProjectInformation.map((project) => {
  project.skills.map(skill => {
    if (!skills.includes(skill))
      skills= [...skills, skill];
  })
})
console.log(skills);

const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#6554AF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ccc5ee',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {

  const navigate = useNavigate();

  const projectRef = useRef(null);
  const skillsAndExperienceRef = useRef(null);
  const aboutMeRef = useRef(null);

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(true);

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

  useEffect(() => {
    console.log('location change')
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [location])

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open)
  };

  const homeNavigations = [ 'Projects', 'Skills','About Me']

  const homeNavigationOnClick = (page) => {
    if(page==='Skills') {
      if(skillsAndExperienceRef.current !== undefined ) {
        skillsAndExperienceRef.current.scrollIntoView({
          // behavior: 'smooth'
        })
      }
    }
    if(page==='Projects') {
      if(projectRef.current !== undefined ) {
        projectRef.current.scrollIntoView({
          // behavior: 'smooth'
        })
      }
    }
    if(page==='About Me') {
      if(aboutMeRef.current !== undefined ) {
        aboutMeRef.current.scrollIntoView({
          // behavior: 'smooth'
        })
      }
    }
  }

  const list = () => (
    <Box
      width={250}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      
    >
      <List sx={{width:'100%'}}>
      {location.pathname !== '/' ?
      <ListItemButton onClick={() => {
        setDrawer(false)
        setHomeOpen(true)
        navigate('/')}}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      : <>
      <ListItemButton onClick={() => setHomeOpen(!homeOpen)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
        {homeOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={homeOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {homeNavigations.map((page, index) => (
          <>
          <ListItem disablePadding key={index} >
            <ListItemButton sx={{ pl: 4 }} onClick={e=> {
              e.preventDefault()
              homeNavigationOnClick(page)
              setDrawer(false);
              }}>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
          </>
        ))}
      </List> 
      </Collapse>
      </>}
      <Divider sx={{borderColor : 'rgb(255 255 255 / 77%)', marginTop:'10px', marginBottom:'10px'}}/>

      <ListItemButton onClick={() => setProjectOpen(!projectOpen)}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
        {projectOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={projectOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {skills.map((text, index) => (
          <>
          <ListItem key={text} disablePadding >
            <ListItemButton sx={{ pl: 4 }} onClick={e=> {
              e.preventDefault()
              setDrawer(false);
              text==='All'? navigate('/projects') : navigate(`/projects/${text}`)}}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          {text === 'All' ? <Divider sx={{borderColor : 'rgb(255 255 255 / 77%)', width:'90%', margin:'auto'}}/>:<></>}
          </>
        ))}
      </List> 
      </Collapse>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <div className="App">
          <TopBar positionTop={scrollPosition} toggleDrawer={toggleDrawer} skills={skills} location={location.pathname}
          projectRef={projectRef} skillsAndExperienceRef={skillsAndExperienceRef} aboutMeRef={aboutMeRef}/> 
          <Drawer
            anchor={'left'}
            open={drawer}
            onClose={toggleDrawer(false)}
            sx={{width:'50%'}}
            id='boardslist'
          >
            {list()}
          </Drawer>
          {loading ? (<>{LazyLoadingFull}</>) : (<>
          <Routes>
            <Route path="/" element={<Home LazyLoading = {LazyLoading} 
            projectRef={projectRef} skillsAndExperienceRef={skillsAndExperienceRef} aboutMeRef={aboutMeRef}
            ReactImage={ReactImage} SpringBootImage={SpringBootImage} JavaImage={JavaImage} PythonImage={PythonImage} />}/>
            <Route path="/projects" element={
              <Suspense fallback={LazyLoadingFull}>
                <Projects LazyLoading = {LazyLoading} />
              </Suspense>
            }/>
            <Route path="/projects/:skill" element={
              <Suspense fallback={LazyLoadingFull}>
                <Projects LazyLoading = {LazyLoading} />
              </Suspense>
            }/>
            <Route path='/project/:id' element ={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </>)}
        <Footer />
      </div>
    </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
