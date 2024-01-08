import { useRef, lazy, Suspense, useState, useEffect} from 'react';
import {Button, Grid, Box, Typography, Stack, Snackbar, IconButton} from '@mui/material';
import './image.jpg'
import './Home.css'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LazyLoadingFull from '../Utils/LazyLoading/LazyLoadingFull';
import LazyLoading from '../Utils/LazyLoading';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

// import Projects from './Projects';

const FADE_INTERVAL_MS = 4000

const Projects = lazy(() => import('./Projects'))
const SkillsAndExperience = lazy(() => import('./SkillsAndExperience'))
const AboutMe = lazy(() => import('./AboutMe'))

const headerTexts = ["I'm a Full-Stack Developer", "I Build Things for the Web!","I Craft Digital Experiences!"]


function Home(props) {

    const [fadeProp, setFadeProp] = useState('fade-in');
    const [headerText, setHeaderText] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const containerRef = useRef()
    const glassRef = useRef()
    const [opacity, setOpacity] = useState(0)
    const [imgOpacity, setImgOpacity] = useState(0)

    const [loading, setLoading] = useState(false)

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

    const handleSnackBarClose = (e) => {
        setSnackbarOpen(false)
    }

    const LinkButtonStyle={
        fontSize:'1.5em',
        minWidth:50,
        minHeight:50,
        background:'rgba(144, 138, 170, 0.15)',
        color:'rgb(193 182 245)',
        borderRadius:'50%',
        padding:0,
        marginBottom:3
    }

    const UpperLinkStyle={
        fontSize:'1.2em',
        minWidth:40,
        minHeight:40,
        background:'rgba(144, 138, 170, 0.15)',
        color:'rgb(193 182 245)',
        borderRadius:'50%',
        padding:0,
        marginBottom:3
    }

    const handleSnackbarOpen = () => {
        setCopied(false)
        setSnackbarOpen(true)
    }

    const ClipboardButton = <IconButton aria-label='copy email' 
        onClick={() => {
        navigator.clipboard.writeText('agnidipto12.25@gmail.com')
        setCopied(true)
        }}
        disabled={copied}
        sx={{color : copied ? 'rgba(15, 236, 85, 0.911) !important': 'auto'}}>
        {copied? <DoneIcon /> : <ContentCopyIcon />}
        </IconButton>

    return (<>
        <div style={{display:loading?'block' : 'none'}}>
            <LazyLoadingFull />
        </div>
        <div style={{display: loading?'none':'block'}}>
            <div className="container" >
            <img src={require('./image.jpg')} alt='background' 
            style={{opacity: imgOpacity}}
            className='header-image'
            onLoad={() => {
                // setLoading(false)
                setTimeout(() => {setImgOpacity(1)}, 100)
            }}
            />
            <Box className = 'centered' 
            sx={{borderRadius:'4px', 
            width:{ xs: '85%', sm:'80%', lg: '55%', md:'70%' }, 
            height:'70%', 
            minHeight:'630px',
            // opacity: imgOpacity
            }}
            ref={containerRef}
            >
                {/* <Slide in={true} direction='up' container={containerRef.current}
                {...( { timeout: 700 })}> */}
              <div className="glass-effect" 
              style={{borderRadius:'4px', height:'85%', opacity:opacity, minHeight:536}}
              ref={glassRef}>
                <Grid container spacing={2} style={{padding:20}}>
                  <Grid item xs={12} md={10}>
                    <div style={{textAlign:'left'}}>
                    <Stack direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={4}
                    sx={{display:{xs:'flex', md:'none'}}}>
                        <Button sx={{...UpperLinkStyle}} className='linkedin-button'
                        href = 'https://www.linkedin.com/in/agnidipto-sinha/'>
                            <FaLinkedinIn/>
                        </Button>
                        <Button sx={{...UpperLinkStyle}} className='gmail-button'
                        href='mailto:agnidipto12.25@gmail.com'
                        onClick={handleSnackbarOpen}>
                            <SiGmail/>
                        </Button>
                        <Button sx={{...UpperLinkStyle}} className='github-button'
                        href='https://github.com/Agnidipto'>
                            <FaGithub/>
                        </Button>
                    </Stack>
                    <Box sx={{ width: '100%', maxWidth:700 }}>
                        <Typography variant={'h2'} className={fadeProp} color='primary.light' gutterBottom 
                            sx={{fontSize : { xs: '45px', sm:'50px', md: '60px'}, 
                            marginBottom:{xs:6, sm:2, md:4}, 
                            marginTop:{xs:3, sm:2, md:0},
                            height:{ xs:'auto', md : 'auto'}}}>
                            {headerTexts[headerText]}
                        </Typography>

                        <Typography variant={'h5'} sx={{marginBottom:3, fontSize:{md:'1.4rem', sm:'1.3em', xs:'1.2em'}}}>
                            Embark on a visual odyssey through my portfolio, where the alchemy of code meets the canvas of  creativity, resulting in a collection of meticulously crafted projects.
                        </Typography>
                        <Typography variant={'h5'} 
                        sx={{marginBottom:3, display:{xs:'none', sm:'block'}, fontSize:{md:'1.4rem', xs:'1.3em'}}}>
                            Each project encapsulates not just lines of code, but a narrative of innovation, design finesse, and user-centric experiences. 
                        </Typography>
                        <Typography variant={'h5'} 
                        sx={{marginBottom:3, display:{xs:'none', xl:'block'}, fontSize:{md:'1.4rem', xs:'1.3em'}}}>
                            Join me in the collaborative realm, where past experiences converge with future possibilities, as we sculpt the digital landscape together.
                        </Typography>
                        
                    </Box>
                    {/* <Box sx={{maxWidth : 500, display : {md:'block', xs : 'none'}}}>
                    <Typography sx = {{marginBottom:2}}>
                        Software Developer, with experience in Full-Stack Development primarily.
                    </Typography>
                    <Typography sx = {{marginBottom:2, display:{md : 'none', lg : 'block'}}}>
                        Focused on building efficient and user-friendly Websites, providing a great user-experience.
                    </Typography>
                    <Typography sx = {{marginBottom:2}}>
                        Specialised in a variety of frameworks, and up-to-date with required key technologies. Do feel free to go through the case studies of my projects below !
                    </Typography>
                    </Box> */}
                    {/* <p>{glassRef.current? glassRef.current.offsetWidth : ''}</p> */}
                    <Box sx={{ width: '100%', maxWidth:500 }}>
                    
                    <div style={{marginBottom:10, width:glassRef.current? glassRef.current.offsetWidth-32 : 'auto'}} className='bottom-left'>
                        
                        {/* <Box sx = {{display: {xs : 'block', md : 'block'}}}>
                            <div>
                                <Typography sx ={{fontSize:'20px', lineHeight:4,}} color='secondary.light'>
                                    <FaReact style={{marginRight:'10%'}}/> 
                                    <DiJsBadge style={{marginRight:'10%'}}/> 
                                    <SiSpring style={{marginRight:'10%'}}/> 
                                    <SiFlask style={{marginRight:'10%'}}/>
                                    <FaDatabase />
                                </Typography>
                            </div>
                        </Box> */}
                        <Grid container columnSpacing={2}>
                            <Grid item xs={4}>
                                <Button variant="contained" onClick={ProjectButtonOnClick} className='header-button'>
                                    Projects</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" onClick={SkillsAndExperienceOnClick} className='header-button'>
                                    Skills</Button>
                            </Grid>
                            <Grid item xs={4}>
                            <a href='/files/Agnidipto_Sinha_Resume.pdf' download>
                                <Button variant="contained" className='header-button' >
                                    Resume</Button>
                            </a>
                            </Grid>
                            
                        </Grid>
                        
                    </div>
                    </Box>
                    </div>

                  </Grid>
                  
                  <Grid item xs={0} md={2} sx={{display : {xs : 'none', md : 'block', textAlign:'right'}}}>
                    <Stack alignItems="flex-end" sx={{marginTop:2}}>
                        <Button sx={{...LinkButtonStyle}} className='linkedin-button'
                        href='https://www.linkedin.com/in/agnidipto-sinha/'>
                            <FaLinkedinIn/>
                        </Button>
                        <Button sx={{...LinkButtonStyle}} className='gmail-button'
                        href='mailto:agnidipto12.25@gmail.com'
                        onClick={handleSnackbarOpen}>
                            <SiGmail/>
                        </Button>
                        <Button sx={{...LinkButtonStyle}} className='github-button'
                        href='https://github.com/Agnidipto'>
                            <FaGithub/>
                        </Button>
                    </Stack>
                    
                  </Grid>

                </Grid>                
                
              </div>
            </Box>
            </div>

            <Box sx={{maxWidth:1500, margin:'auto'}}>
            
                <div ref={props.projectRef} style={{scrollMargin:'100px'}}>
                    <Suspense fallback={LazyLoading}>
                        <Projects />
                    </Suspense>
                </div>
                <br/> <hr style={{width:'95%'}}/>
                <div ref={props.skillsAndExperienceRef} style={{scrollMargin:'100px'}}>
                    <Suspense fallback={LazyLoading}>
                        <SkillsAndExperience 
                        ReactImage={props.ReactImage} 
                        SpringBootImage={props.SpringBootImage} 
                        JavaImage={props.JavaImage} 
                        PythonImage={props.PythonImage}/>
                    </Suspense>
                </div>
                <br/> <hr style={{width:'95%'}}/>
                <div ref={props.aboutMeRef} style={{scrollMargin:'100px'}}>
                    <Suspense fallback={LazyLoading}>
                        <AboutMe />
                    </Suspense>
                </div>

            </Box>
            
        </div>
        <Snackbar
          anchorOrigin={{ vertical : 'bottom', horizontal : 'right' }}
          open={snackbarOpen}
          onClose={handleSnackBarClose}
          message={copied? "Email Copied!":"agnidipto12.25@gmail.com"}
          action = {ClipboardButton}
          autoHideDuration = {5000}
        />
    </>
    )
}

export default Home;