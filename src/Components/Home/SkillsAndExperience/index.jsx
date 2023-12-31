import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Slide from '@mui/material/Slide';
import { useIsVisible } from '../../Utils/useIsVisible';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

function SkillsAndExperience(props) { 

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  // const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate()

  const [skillAvatar, setSkillAvatar] = useState(null);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const skillsRef = useRef();
  
  const tempVisible = useIsVisible(skillsRef)

  const [imageLoad, setImageLoad] = useState({})

  useEffect(() => {
    if (isSkillsVisible) setIsSkillsVisible(true)
    else setIsSkillsVisible (tempVisible)
  }, [tempVisible])


  const SkillData = [
    {
      head: 'ReactJS',
      content: 'Considerable amount of experience and knowledge in ReactJS, including frameworks that support it (including Hooks, Redux, FramerMotion, etc). ',
      image : props.ReactImage,
      rating:4.5,
      url:'/projects/ReactJS',
      min : '/projects/reactmin.jpg'
    },
    {
      head: 'SpringBoot',
      content: 'Experienced in SpringBoot for Rest APIs, having worked in real-time Projects. Knowledge include, but not limited to, creating API Endpoints, Authorization with JWT, handling Multipart Data and Exception Handling. Experience include creation of Art-based Blog Channel, and Quiz Platform.',
      image: props.SpringBootImage,
      rating:4,
      url:'/projects/SpringBoot',
      min : '/projects/spring-bootmin.jpg'
    },
    {
      head: 'Java',
      content: 'Considerable amount of knowledge in Java, including building real-world Projects. Job Experience include creating Automations in client-based Projects, for reading and analyzing client data, and additional experience with Spring Boot.',
      image: props.JavaImage,
      rating: 4,
      url:'/projects/Java',
      min : '/projects/javamin.jpg'
    },
    {
      head: 'Python',
      content: 'Project-based Experience in Python, which include building APIs for Back-end. Frameworks/Library include FastAPI and Flask. Also Automation based Projects for Client, for reading and analyzing Client Data, as well as Selenium for running Automation test scenarios and accessing data.',
      image: props.PythonImage,
      rating: 3.5,
      url:'/projects/Python',
      min : '/projects/pythonmin.jpg'
    },

  ]

  const OtherSkillsData = [
    {
      head:'NodeJS',
      image: require('./OtherSkillsImages/node.png'),
    },
    {
      head: 'PL/SQL',
      image: require('./OtherSkillsImages/plsql.png')
    },
    {
      head: 'Redux',
      image: require('./OtherSkillsImages/redux.png')
    },
    {
      head: 'Git',
      image: require('./OtherSkillsImages/git.png')
    },
    {
      head: 'Android',
      image: require('./OtherSkillsImages/android.png')
    },
    {
      head: 'IOT',
      image: require('./OtherSkillsImages/iot.png')
    },
    {
      head: 'Embedded Systems',
      image: require('./OtherSkillsImages/embedded.png')
    },
  ]

  const onMouseOverOtherSkill = (skill) => {
    setSkillAvatar(skill)
  }

  const onMouseLeaveOtherSkill = () => {
    setSkillAvatar(null)
  }

  const avatarStyle = {
    transition: 'all .5s'
  }

  const avatarStyleHidden = {
    width: '1px !important',
    height: '1px !important',
    opacity:0,
    transition: 'all .5s'
  }

  const styles = {
    card: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  };

  return (
    <div>
      <Box>
        <Typography variant = 'h1' color='primary.light' sx={{marginTop : 10, marginBottom:5}}>
          Skills
        </Typography>
        
        <Grid container columnSpacing={2} rowSpacing={0} 
        sx={{paddingLeft:'2%', paddingRight:'2%', minHeight:{xs:'490px', md:'270px'}, transition:'all 0.5s ease'}}  
        alignItems="stretch" ref={skillsRef}>
        {SkillData.map((skill, index) => (
        <Slide in={isSkillsVisible} mountOnEnter unmountOnExit direction='right'
        style={{ transformOrigin: `0 0 0`, zIndex:SkillData.length-index, }}
          {...(isSkillsVisible ? { timeout: 200*(index+1) } : {})}>
          <Grid item md={3} xs={6} sx={{justifyContent:'center',}}>
            <Card sx={{ maxWidth: 345, margin:'auto', width:'100%'}} onClick={e => navigate(skill.url)}>
              <CardActionArea sx={{ padding:0}}>
                <CardMedia
                  children = {<>
                     <Box
                     sx={{ display: imageLoad[skill.head]? 'none' : 'flex', 
                     height:125, justifyContent:'center', alignItems: 'center', background:'#2a2057' }}>
                      <CircularProgress />
                    </Box>
                    <img src={skill.image} style={{display: imageLoad[skill.head]? '' : 'none', width:'100%'}} alt={skill.head}
                    onLoad={() => setImageLoad({...imageLoad, [skill.head] : true})}/>
                  </>}
                />
                <CardContent  >
                  <Box >
                  <Typography gutterBottom variant="h5" component="div">
                    {skill.head}
                  </Typography>
                  <Rating name="read-only" value={skill.rating} readOnly precision={0.5}/>
                  {/* {greaterThanMid ? 
                  <Typography variant="body2" color="text.secondary">
                    {skill.content}
                  </Typography>
                  : <></>} */}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Slide>
        ))}
          
        </Grid>

        <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
        <Grid container columnSpacing={3} rowSpacing={1} style={{padding:20}} justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h2" color="text.secondary">
              Other Skills
            </Typography>
          </Grid>
          <Grid item>
            <Grid container columnSpacing={1} rowSpacing={1} justifyContent="center" alignItems="center">
            {OtherSkillsData.map(skill => (
              
              <Grid item>
              <Chip  avatar={<Avatar sx={skillAvatar === skill.head ? avatarStyle: avatarStyleHidden} src={skill.image} /> } label={skill.head} onMouseEnter={() => onMouseOverOtherSkill(skill.head)} onMouseLeave={() => onMouseLeaveOtherSkill()}
              />
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid >
        
      </Box>
    </div>
  )
}

export default SkillsAndExperience;