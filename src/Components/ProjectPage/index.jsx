import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectInformation from "../../Information";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ProjectPage(props) {

  const {id} = useParams()
  
  const Project = ProjectInformation.filter((project) => project.id == id)[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div style={{minHeight:'100vh'}}>
      <Box sx={{textAlign:'left'}}>
        <div>
          <img src={Project.image} alt='Projectheading' style={{width:'100%', height:'40vh', objectFit:'cover'}}/>
        </div>
        
        <Box sx={{width:{lg:'50%', md:'70%', sm:'80%', xs:'90%'}, margin:'auto'}}>
          <br/>
          {Project.fullContent.title}<br/>
          {Project.fullContent.description}
          <br/>
          <Typography variant='h3' sx={{marginTop:5}}>Features</Typography>
          {Project.fullContent.features}
          <br/>
          <Typography variant='h3' sx={{marginTop:5}}>Tech Used</Typography>
          {Project.fullContent.technology}
          <br/>
          <Typography variant='h3' sx={{marginTop:5}}>Challenges</Typography>
          {Project.fullContent.challenges}
        </Box>
      </Box>
    </div>
    </>
  )
}

export default ProjectPage;