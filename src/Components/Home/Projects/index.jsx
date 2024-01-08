// import {useState} from 'react';
import {Grid, Box, Typography, ButtonBase, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import Experience from './Experience';

function Projects(props) { 

  const navigate = useNavigate()

  const buttonStyle = {
    fontSize:'1rem', 
    textAlign:{xs:'center', md:'left'},  
    lineHeight:'1.4',  
    wordSpacing:1.2, 
    width: '90%', 
    borderRadius:'10px', 
    transition:'background-color 0.1s linear', 
    '&:hover' : {background:'#28262f'},
    // marginLeft:'1%'
  }

  const imgStyle = {
    width:'100%', objectFit:'cover', borderRadius:4, maxHeight:300
  }

  return (
    <div>
      <Box >
        <Fade>
          <Typography variant = 'h1' color='primary.light' sx={{marginTop : 10, marginBottom:5}}>
            Projects
          </Typography>
        </Fade>
        <Fade >
        <ButtonBase sx={{...buttonStyle, padding:{lg: '20px 50px', md:'20px 0px', xs:'20px 2%'}}} focusRipple={true} 
        onClick={e => navigate('./project/1')}>
        <Grid container columnSpacing={1} rowSpacing={5} sx={{padding:{lg: '20px 50px', md:'20px 0px', xs:'20px 2%'}}}
        alignItems="center">
          <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} order={{xs:2, md:1}}>
            <Box sx={{width:{md : '70%', xs: '90%'}, margin:'auto'}}>
              <Typography variant='h3' color='secondary.light'>
                Art-Blog Channel
              </Typography>
              <br/>
              <Typography variant='p' >
              Website created for showcasing the Portfolio of Arts and Crafts that is made by the Client. <br/>
              React was used for front-end, alongwith Semantic for styling/designing. Spring Boot was used for creating the APIs for back-end, and PostsgreSQL for Database.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} order={{xs:1, md:2}} style={{textAlign:'center'}}>
            <Box sx={{width : {md:'70%', xs : 'auto'}, margin:'auto'}}>
            <img src={require('./ProjectsImages/crafts.jpg')} alt='Crafts' style={imgStyle} />
            </Box>
          </Grid>
        </Grid>
        </ButtonBase>
        <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
        </Fade>
        <Fade >
        <ButtonBase sx={{...buttonStyle, padding:{lg: '20px 50px', md:'20px 0px', xs:'20px 2%'}}} focusRipple={true} 
        onClick={e => navigate('./project/2')}>
        <Grid container columnSpacing={1} rowSpacing={5} sx={{padding:{lg: '20px 50px', md:'20px 0px', xs:'20px 2%'}}}
        alignItems="center">
          <Grid item md={6} xs={12} style={{textAlign:'center'}}>
            <Box sx={{width : {md:'70%', xs : 'auto'}, margin:'auto'}}>
            <img src={require('./ProjectsImages/houses.jpg')} alt='Crafts' style={imgStyle} />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} >
            <Box sx={{width:{md : '70%', xs: '90%'}, margin:'auto'}}>
              <Typography variant='h3' color='secondary.light'>
                Real-Estate Price Prediction
              </Typography>
              <br/>
              <Typography variant='p' sx={{textAlign:'left'}}>
                Website Created for Predicting the House Prices in a city using Machine Learning. We used different regression models in the backend. Out of all the models we tried, turns out that multiple linear regression performed the best, hence we decided to go forward with it.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </ButtonBase>
        <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
        </Fade>
        <Fade >
        <ButtonBase sx={{...buttonStyle, padding:{lg: '20px 50px', md:'20px 0px', xs:'20px 2%'}}} focusRipple={true} 
        onClick={e => navigate('./project/3')}>
        <Grid container columnSpacing={1} rowSpacing={5} 
        sx={{padding:{lg: '20px 50px', md:'20px 0px', xs:'20px 2%'}}}
        alignItems="center">
          <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} order={{xs:2, md:1}}>
            <Box sx={{width:{md : '70%', xs: '90%'}, margin:'auto'}}>
              <Typography variant='h3' color='secondary.light'>
                Investment Portfolio
              </Typography>
              <br/>
              <Typography variant='p' sx={{textAlign:'left'}}>
              Self-Project for viewing and analyzing Investments made in Stock Market, including various types of visual representation of data. Application built in React, with Back-End using Flask. <br/>
              The Visual graphs were made using React-vis, RechartJS and Apex Charts.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} order={{xs:1, md:2}} style={{textAlign:'center'}}>
            <Box sx={{width : {md:'70%', xs : 'auto'}, margin:'auto'}}>
            <img src={require('./ProjectsImages/investments.jpg')} alt='Crafts' style={imgStyle} />
            </Box>
          </Grid>
        </Grid>
        </ButtonBase>
        <br/> 
        {/* <hr style={{width:'85%', borderColor:'grey'}}/>  */}
        
        </Fade>
        <Fade>
          <Button variant="contained" color='primary' 
          sx={{background:'#1e1e1e', height:'50px', color:'white', fontSize:'15px', width:'85%', marginTop:'15px', marginBottom:'15px'}} 
          onClick={(e) => navigate('/projects')}>
            View All Projects {'  '}<ArrowForwardIcon sx={{marginLeft:1, fontSize:'20px', marginBottom:0.3}}/>
          </Button><hr style={{width:'85%', borderColor:'grey'}}/> <br/>
        </Fade>

        <Fade>
          <Experience />
        </Fade>

      </Box>
    </div>
  )
}

export default Projects;