import { useRef, lazy, Suspense, useState, useEffect} from 'react';
import {Button, Grid, Box, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import './image.jpg'
import './Home.css'
import { FaReact, FaDatabase } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { SiSpring, SiFlask } from "react-icons/si";
import Slide from '@mui/material/Slide';

// import Projects from './Projects';

const FADE_INTERVAL_MS = 4000

const Projects = lazy(() => import('./Projects'))
const SkillsAndExperience = lazy(() => import('./SkillsAndExperience'))
const AboutMe = lazy(() => import('./AboutMe'))

const headerTexts = ['I Create Solutions for You!', "I'm a Full-Stack Developer", "I Build Things for the Web!"]


function Home(props) {

    const [fadeProp, setFadeProp] = useState('fade-in');
    const [headerText, setHeaderText] = useState(0);

    const containerRef = useRef()
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
        setOpacity(1)
    }, [])

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            setFadeProp('fade-out')
            setTimeout(() => {
                // if (fadeProp === 'fade-out')
                headerText === 2 ? setHeaderText(0) : setHeaderText(headerText+1);
                setFadeProp('fade-in')
            }, 1000)
          
        }, FADE_INTERVAL_MS)
    
        return () => clearInterval(fadeTimeout)
      }, [fadeProp, headerText])

    // const projectRef = useRef(null);
    // const skillsAndExperienceRef = useRef(null);
    // const aboutMeRef = useRef(null);

    const ProjectButtonOnClick = (event) => {
        event.preventDefault()
        props.projectRef.current.scrollIntoView({
            // behavior: 'smooth'
        })
    }

    const SkillsAndExperienceOnClick = (event) => {
        event.preventDefault()
        props.skillsAndExperienceRef.current.scrollIntoView({
            // behavior:'smooth'
        })
    }

    const AboutMeOnClick = (event) => {
        event.preventDefault()
        props.aboutMeRef.current.scrollIntoView({
            // behavior:'smooth'
        })
    }

    return (
        <div>
            <div className="container" >
            <img src={require('./image.jpg')} alt='background' style={{width:'100%', height:'100vh',marginTop:'-65px', objectFit:'cover', minHeight:'700px'}} />
            <Box className = 'centered' 
            sx={{borderRadius:'4px', width:{ xs: '85%', sm:'80%', md: '70%' }, height:'70%', minHeight:'630px'}}
            ref={containerRef}
            >
                <Slide in={true} direction='up' container={containerRef.current}
                {...( { timeout: 700 })}>
              <div className="glass-effect" style={{borderRadius:'4px', height:'92%', opacity:opacity}}>
                <Grid container spacing={2} style={{padding:20}}>
                  <Grid item xs={12} md={10}>
                    <div style={{textAlign:'left'}}>
                    <Box sx={{ width: '100%', maxWidth:700 }}>
                    <div style={{marginBottom:10}}>
                        {/* <Typography variant="p" sx={{fontsize : 10, marginBottom:150}}>
                          Hi! My name is ...
                        </Typography> */}
                    </div>
                    
                    <Typography variant="h3" color='secondary.light' gutterBottom sx={{fontSize : { xs: '30px', sm: '35px', md: '40px' }}}>
                      Agnidipto Sinha
                    </Typography>
                    <Typography variant={'h2'} className={fadeProp} color='primary.light' gutterBottom sx={{fontSize : { xs: '55px', md: '60px' }}}>
                    {headerTexts[headerText]}
                    </Typography>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth:500 }}>
                    
                    <Typography variant='p' gutterBottom>
                        Software Developer, with experience in Full-Stack Development primarily. 
                    </Typography>
                        <br/>
                    <Typography variant='p' gutterBottom sx = {{display: {xs : 'none', sm : 'block'}}}>
                        <br/>
                        Focused on building efficient and user-friendly Websites, providing a great user-experience.
                    </Typography>
                    <Typography variant="p" gutterBottom 
                    // sx = {{display: {xs : 'none', sm : 'block'}}}
                    >
                        <br/>
                        Specialised in a variety of frameworks, and up-to-date with required key technologies. Do feel free to go through the case studies of my projects below !
                    </Typography>
                    <Box sx = {{display: {xs : 'block', md : 'none'}}}>
                        <div>
                            <Typography sx ={{fontSize:'20px', lineHeight:4,}} color='secondary.light'>
                                <FaReact style={{marginRight:'10%'}}/> 
                                <DiJsBadge style={{marginRight:'10%'}}/> 
                                <SiSpring style={{marginRight:'10%'}}/> 
                                <SiFlask style={{marginRight:'10%'}}/>
                                <FaDatabase />
                            </Typography>
                        </div>
                    </Box>
                    <div style={{marginBottom:10}} className='bottom-left'>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={ProjectButtonOnClick}>Projects</Button>
                            <Button variant="contained" onClick={SkillsAndExperienceOnClick}>Skills</Button>
                            <Button variant="contained" onClick={AboutMeOnClick}>About Me</Button>
                        </Stack>
                        
                    </div>
                    </Box>
                    </div>

                  </Grid>
                  
                  <Grid item xs={0} md={2} sx={{display : {xs : 'none', md : 'block'}}}>
                    <div style={{textAlign:'right', marginTop:20}}>
                        <Typography sx ={{fontSize:'20px', lineHeight:4,}} color='secondary.light'>
                            <FaReact/> <br/>
                            <DiJsBadge/> <br/>
                            <SiSpring /> <br/>
                            <SiFlask /> <br/>
                            <FaDatabase />
                        </Typography>
                    </div>
                  </Grid>

                </Grid>                
                
              </div>
              </Slide>
            </Box>
            </div>
            
            <div ref={props.projectRef} style={{scrollMargin:'100px'}}>
                <Suspense fallback={props.LazyLoading}>
                    <Projects />
                </Suspense>
            </div>
            <br/> <hr style={{width:'95%'}}/>
            <div ref={props.skillsAndExperienceRef} style={{scrollMargin:'100px'}}>
                <Suspense fallback={props.LazyLoading}>
                    <SkillsAndExperience 
                    ReactImage={props.ReactImage} 
                    SpringBootImage={props.SpringBootImage} 
                    JavaImage={props.JavaImage} 
                    PythonImage={props.PythonImage}/>
                </Suspense>
            </div>
            <br/> <hr style={{width:'95%'}}/>
            <div ref={props.aboutMeRef} style={{scrollMargin:'100px'}}>
                <Suspense fallback={props.LazyLoading}>
                    <AboutMe />
                </Suspense>
            </div>
            
        </div>
    )
}

export default Home;