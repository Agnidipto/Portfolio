import { lazy, Suspense, useState, useEffect } from 'react';
import { Box, Snackbar, IconButton } from '@mui/material';
import './Home.css';
import LazyLoading from '../Utils/LazyLoading';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import Hero from './Hero';
import Footer from '../Footer';
import { AnimationLayout, TransitionLayer } from '../TransitionLayer/index.jsx';
import scrollTo from '../Utils/scrollTo';
import { useDispatch, useSelector } from 'react-redux';
import { projectPopped } from '../../reducers/projectPop.js';

// import Projects from './Projects';

const FADE_INTERVAL_MS = 4000;

const Projects = lazy(() => import('./Projects'));
const SkillsAndExperience = lazy(() => import('./SkillsAndExperience'));
const AboutMe = lazy(() => import('./AboutMe'));

function Home(props) {

  const [fadeProp, setFadeProp] = useState('fade-in');
  const [headerText, setHeaderText] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reload, setReload] = useState(false);

  const projectPop = useSelector(state => state.projectPop.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp('fade-out');
      setTimeout(() => {
        // if (fadeProp === 'fade-out')
        headerText === 2 ? setHeaderText(0) : setHeaderText(headerText + 1);
        setFadeProp('fade-in');
      }, 1000);

    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp, headerText]);

  useEffect(() => {
    if (projectPop) {
      setTimeout(() =>
        scrollTo({
          top: 200,
          duration: 400,
        }), 1500);
      setTimeout(() =>
        scrollTo({
          top: 0,
          duration: 400,
        }), 1900);
      dispatch(projectPopped());
    }
  }, []);

  const handleSnackBarClose = (e) => {
    setSnackbarOpen(false);
  };

  const handleSnackbarOpen = () => {
    setCopied(false);
    setSnackbarOpen(true);
  };

  const ClipboardButton = <IconButton aria-label='copy email'
    onClick={() => {
      navigator.clipboard.writeText('agnidipto12.25@gmail.com');
      setCopied(true);
    }}
    disabled={copied}
    sx={{ color: copied ? 'rgba(15, 236, 85, 0.911) !important' : 'auto' }}>
    {copied ? <DoneIcon /> : <ContentCopyIcon />}
  </IconButton>;

  return (<>
    <TransitionLayer />
    <AnimationLayout>
      <div style={{ position: 'sticky', top: 65, zIndex: 0, height: '100vh' }}>
        <Hero skillsAndExperienceRef={props.skillsAndExperienceRef} projectRef={props.projectRef} handleSnackbarOpen={handleSnackbarOpen}/>
      </div>
      <div style={{ zIndex: 100, position: 'relative' }}  className='dark-bg'>

        <Box sx={{ maxWidth: 1500, margin: 'auto' }} >

          <div ref={props.projectRef} style={{ scrollMargin: '100px' }}>
            <Suspense fallback={LazyLoading}>
              <Projects />
            </Suspense>
          </div>
          <br/> <hr style={{ width: '95%' }}/>
          <div ref={props.skillsAndExperienceRef} style={{ scrollMargin: '100px' }}>
            <Suspense fallback={LazyLoading}>
              <SkillsAndExperience/>
            </Suspense>
          </div>
          <br/> <hr style={{ width: '95%' }}/>

        </Box>
        <div ref={props.aboutMeRef} style={{ scrollMargin: '100px' }}>
          <Suspense fallback={LazyLoading}>
            <AboutMe />
          </Suspense>
        </div>
        <Footer />
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarOpen}
        onClose={handleSnackBarClose}
        message={copied ? 'Email Copied!' : 'agnidipto12.25@gmail.com'}
        action = {ClipboardButton}
        autoHideDuration = {5000}
      />
    </AnimationLayout>
  </>
  );
}

export default Home;
