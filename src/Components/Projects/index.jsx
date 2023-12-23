import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import {Grid} from '@mui/material';
import Banner from './Banner';
import Fade from 'react-reveal/Fade';
import ButtonBase from '@mui/material/ButtonBase'; 
import ProjectInformation from '../../Information';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Projects(props) {

  const {skill} = useParams()
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function filterBy(project) {
    var regex = new RegExp( project.skills.join( "|" ), "i");
    return regex.test( skill );
  }

  const Projects = skill ? ProjectInformation.filter(filterBy) : ProjectInformation

  const navigate = useNavigate()

  return (<>
  <Box sx={{marginTop:'-65px'}} ref={ref}>
      <Banner skill={skill} ref={ref} length={Projects.length}/>
    <br/><br/>

    <div style={{zIndex:100, background:'black'}}>
    {Projects.map((project, idx) => idx%2===0 ?
    <>
    <Fade>
    
    <Grid container columnSpacing={2} rowSpacing={5} sx={{padding:{md:'20px 50px 20px 50px', xs:'20px 2% 20px 2%'}}} 
    alignItems="center">
      <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} order={{xs:2, md:1}}>
      <ButtonBase 
      sx={{fontSize:'1rem', textAlign:{xs:'center', md:'left'}, lineHeight:'1.4', paddingTop:2, paddingBottom:2, wordSpacing:1.2, width:'100%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}} 
      focusRipple={true}
      onClick ={() => navigate(`/project/${project.redirectUrl}`)}>
        <Box sx={{width:{md : '70%', xs: '95%'}, margin:'auto'}}>
          {project.title}
          <br/>
          {project.content}
        </Box>
      </ButtonBase>
      </Grid>
      <Grid item md={6} xs={12} order={{xs:1, md:2}}>
        <img src={project.image} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
      </Grid>
    </Grid>
    
    <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
    
    </Fade>
    </>  : <>
    <Fade>
    
    <Grid container columnSpacing={2} rowSpacing={5} style={{padding:20}} alignItems="center">
      <Grid item md={6} xs={12} >
        <img src={project.image} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
      </Grid>
      <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} >
      <ButtonBase 
        sx={{fontSize:'1rem', textAlign:{xs:'center', md:'left'}, lineHeight:'1.4', paddingTop:2, paddingBottom:2, wordSpacing:1.2, width:'90%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}}
        focusRipple={true}
        onClick ={() => navigate(`/project/${project.redirectUrl}`)}>
        <Box sx={{width:{md : '70%', xs: '95%'}, margin:'auto'}}>
          {project.title}
          <br/>
          {project.content}
        </Box>
        </ButtonBase>
      </Grid>
    </Grid>
    
    <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
    </Fade>
    </>
    )}
    </div>
  </Box>
  </>
  )
}

export default Projects;