import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import TopBar from '../src/Components/TopBar';
import SideDrawer from './Components/SideDrawer';
import Home from '../src/Components/Home';
import ProjectPage from '../src/Components/ProjectPage';
import Projects from './Components/Projects';
import InitialLoad from './Components/InitialLoad';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

export const theme = createTheme({
  palette: {
    mode: 'dark',
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
      contrastText: 'rgba(0, 0, 0, 0.87)',
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

  const projectRef = useRef(null);
  const skillsAndExperienceRef = useRef(null);
  const aboutMeRef = useRef(null);

  const [drawer, setDrawer] = useState(false);

  const initLoad = useSelector(state => state.initload.value);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  useEffect(() => {
    if(initLoad) {
      navigate('/');
    }
  }, [initLoad]);

  // useEffect(() => {
  //   dispatch(loadPage())
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AnimatePresence>
          <TopBar toggleDrawer={toggleDrawer}
            projectRef={projectRef} skillsAndExperienceRef={skillsAndExperienceRef} aboutMeRef={aboutMeRef}/>
          <SideDrawer
            drawer={drawer} setDrawer={setDrawer} toggleDrawer={toggleDrawer}
            skillsAndExperienceRef={skillsAndExperienceRef} projectRef={projectRef} aboutMeRef={aboutMeRef}/>

          {initLoad ? (<InitialLoad />) :
            (
              <Routes>
                <Route path="/" element={
                  <Home
                    projectRef={projectRef}
                    skillsAndExperienceRef={skillsAndExperienceRef}
                    aboutMeRef={aboutMeRef}
                  />
                }/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/projects/:skill" element={<Projects/>}/>
                <Route path='/project/:id' element ={<ProjectPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            )
          }

        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
