import { Box } from '@mui/material';
import { useEffect } from 'react';
import {Grid} from '@mui/material';
import Banner from './Banner';
import Fade from 'react-reveal/Fade';
import ButtonBase from '@mui/material/ButtonBase'; 
import ProjectInformation from '../../Information';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Projects(props) {

  const {skill} = useParams()

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
  <Box sx={{marginTop:'-65px'}}>
      <Banner skill={skill}/>
    <br/><br/>

    {Projects.map((project, idx) => idx%2===0 ?
    <>
    <Fade>
    <ButtonBase 
    sx={{lineHeight:'1.4', wordSpacing:1.2, width:'90%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}} 
    focusRipple={true}
    onClick ={() => navigate(`/project/${project.redirectUrl}`)}>
    <Grid container columnSpacing={2} rowSpacing={5} style={{padding:20}} alignItems="center">
      <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} order={{xs:2, md:1}}>
        <Box sx={{width:{md : '70%', xs: '65%'}, margin:'auto'}}>
          {project.title}
          <br/>
          {project.content}
        </Box>
      </Grid>
      <Grid item md={6} xs={12} order={{xs:1, md:2}}>
        <img src={project.image} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
      </Grid>
    </Grid>
    </ButtonBase>
    <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
    
    </Fade>
    </>  : <>
    <Fade>
    <ButtonBase 
    sx={{lineHeight:'1.3', wordSpacing:1.2, width:'90%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}}
    focusRipple={true}
    onClick ={() => navigate(`/project/${project.redirectUrl}`)}>
    <Grid container columnSpacing={2} rowSpacing={5} style={{padding:20}} alignItems="center">
      <Grid item md={6} xs={12} >
        <img src={project.image} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
      </Grid>
      <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} >
        <Box sx={{width:{md : '70%', xs: '65%'}, margin:'auto'}}>
          {project.title}
          <br/>
          {project.content}
        </Box>
      </Grid>
    </Grid>
    </ButtonBase>
    <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
    </Fade>
    </>
    )}
  </Box>
  </>
  )
}

export default Projects;