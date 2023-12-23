import {useState} from 'react';
import {Grid, Box, Typography, ButtonBase, Button} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimelineComponent from '../../Utils/TimelineComponent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";

function Projects(props) { 

  const navigate = useNavigate()

  const [expanded, setExpanded] = useState(false);
  const [expandedSmall, setExpandedSmall] = useState('capgemini');

  const capgemini = [
    {
      head : <Typography variant='h6' color='secondary.light'>Senior Analyst</Typography>,
      data : <>Have worked in Python and Oracle PL/SQL for 2 years. <br/><br/>Used SQL for handling Supply-Chain and Customs clearance data for client. Data include classification of items and item-related information, including Suppliers, Importers, Article weights and cost, Supply-Chain level data including data on Shipments and Consignments, and Customs level data, including Tariffs and Import Duties. <br/><br/>Used Python for scripting Automations for Data Monitoring and Engineering, and running Selenium scripts for testing and Web Scraping of Client data for internal usage.</>
    }, 
    {
      head : <Typography variant='h6' color='secondary.light'>Intern</Typography>,
      data : <>Have been trained in Full-Stack Development, with ReactJS, Spring Boot and PostgreSQL. <br/><br/>Worked on a client-based Project with a team for a Quiz Platform. Built the Rest APIs with Spring Boot and database with PostgreSQL. And built the Front End with ReactJS, with Semantic UI.</>
    }
  ]

  const freelancer = [
    {
      head : <Typography variant='h6' color='secondary.light'>Content-Writer</Typography>,
      data : <>Have been a Freelance Content and Article writer for more than a year. 
      <br/><br/>Have written more than 30 articles for different clients, ranging from Tech Magazines to Tourist Magazines. Have worked on multiple Team Based Projects for delivering high quality work, with managed Keywords and SEO features. Have also been a Content Writer for NSS, a government service scheme, where I have written articles for the daily activities going on in the community.</>
    }, 
    {
      head : <Typography variant='h6' color='secondary.light'>Full-Stack Developer</Typography>,
      data : <>Practice Full-Stack Development as a Freelancer till today. 
      <br/><br/>Have produced efficient, responsive and high-quality work, depending on the client's needs. Made two Projects for a client, including an Art-Blog Channel, and a Real-Estate platform where potential buyers and sellers can come to gather more information.</>
    }
  ]

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeSmall = (panel) => (event, isExpanded) => {
    setExpandedSmall(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box >
        <Fade>
          <Typography variant = 'h1' color='primary.light' sx={{marginTop : 10, marginBottom:5}}>
            Projects
          </Typography>
        </Fade>
        <Fade >
        <Grid container columnSpacing={2} rowSpacing={5} sx={{padding:{md:'20px 50px 20px 50px', xs:'20px 2% 20px 2%'}}}
        alignItems="center">
          <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} order={{xs:2, md:1}}>
            <ButtonBase sx={{fontSize:'1rem', textAlign:{xs:'center', md:'left'},  lineHeight:'1.4', paddingTop:2, paddingBottom:2, wordSpacing:1.2, width:'100%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}} 
            focusRipple={true} onClick={e => navigate('./project/1')}>
            <Box sx={{width:{md : '70%', xs: '90%'}, margin:'auto'}}>
              <Typography variant='h3' color='secondary.light'>
                Art-Blog Channel
              </Typography>
              <br/>
              <Typography variant='p' >
                Website created for showcasing the Portfolio of Arts and Crafts that is made by the Client. <br/>
                React was used for front-end, alongwith Semantic for styling/designing. Spring Boot was used for creating the APIs for back-end, and PostsgreSQL for Database. <br/>
                Heroku was used for hosting it initially.
              </Typography>
            </Box>
            </ButtonBase>
          </Grid>
          <Grid item md={6} xs={12} order={{xs:1, md:2}}>
            <img src={require('./ProjectsImages/crafts.jpg')} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
          </Grid>
        </Grid>
        <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
        </Fade>
        <Fade >
        <Grid container columnSpacing={2} rowSpacing={5} sx={{padding:{md:'20px 50px 20px 50px', xs:'20px 2% 20px 2%'}}} 
        alignItems="center">
          <Grid item md={6} xs={12} >
            <img src={require('./ProjectsImages/houses.jpg')} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
          </Grid>
          <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} >
            <ButtonBase sx={{fontSize:'1rem', textAlign:{xs:'center', md:'left'},  lineHeight:'1.4', paddingTop:2, paddingBottom:2, wordSpacing:1.2, width:'100%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}} 
            focusRipple={true} onClick={e => navigate('./project/2')}>
            <Box sx={{width:{md : '70%', xs: '90%'}, margin:'auto'}}>
              <Typography variant='h3' color='secondary.light'>
                Real-Estate Price Prediction
              </Typography>
              <br/>
              <Typography variant='p' sx={{textAlign:'left'}}>
                Website Created for Predicting the House Prices in a city using Machine Learning. We used different regression models in the backend. Out of all the models we tried, turns out that multiple linear regression performed the best, hence we decided to go forward with it.
              </Typography>
            </Box>
            </ButtonBase>
          </Grid>
        </Grid>
        <br/> <hr style={{width:'85%', borderColor:'grey'}}/> <br/> 
        </Fade>
        <Fade >
        <Grid container columnSpacing={2} rowSpacing={5} 
        sx={{padding:{md:'20px 50px 20px 50px', xs:'20px 2% 20px 2%'}}}
        alignItems="center">
          <Grid item md={6} xs={12} sx = {{textAlign:{xs:'center', md:'left'}}} order={{xs:2, md:1}}>
            <ButtonBase sx={{fontSize:'1rem', textAlign:{xs:'center', md:'left'},  lineHeight:'1.4', paddingTop:2, paddingBottom:2, wordSpacing:1.2, width:'100%', borderRadius:'10px', transition:'background-color 0.1s linear', '&:hover' : {background:'#28262f'}}} 
            focusRipple={true} onClick={e => navigate('./project/3')}>
            <Box sx={{width:{md : '70%', xs: '90%'}, margin:'auto'}}>
              <Typography variant='h3' color='secondary.light'>
                Investment Portfolio
              </Typography>
              <br/>
              <Typography variant='p' sx={{textAlign:'left'}}>
                Self-Project for viewing and analyzing Investments made in Stock Market, including various types of visual representation of data. Application built in React, with Back-End using Flask. <br/>
                There are API Calls to 5Paisa API in back-end. And used a localized SQLite DB for Temporary Storage. The Visual graphs were made using React-vis, RechartJS and Apex Charts.
              </Typography>
            </Box>
            </ButtonBase>
          </Grid>
          <Grid item md={6} xs={12} order={{xs:1, md:2}}>
            <img src={require('./ProjectsImages/investments.jpg')} alt='Crafts' style={{width:'50%', minWidth:375, objectFit:'cover', height:300, borderRadius:4}} />
          </Grid>
        </Grid>
        <br/> 
        <hr style={{width:'85%', borderColor:'grey'}}/> 
        
        </Fade>
        <Fade>
          <Button variant="contained" color='primary' sx={{background:'#1e1e1e', height:'50px', color:'white', fontSize:'15px', width:'85%', marginTop:'15px', marginBottom:'15px'}} onClick={(e) => navigate('/projects')}>
            View All Projects {'  '}<ArrowForwardIcon sx={{marginLeft:1, fontSize:'20px', marginBottom:0.3}}/>
          </Button><hr style={{width:'85%', borderColor:'grey'}}/> <br/>
        </Fade>

        <Fade>
        <Typography variant="h3" color="text.secondary">
          Past Experiences
        </Typography>
        
        {/* Viewed in small screen */}
        <Grid container columnSpacing={1} rowSpacing={2} style={{padding:20}} justifyContent="center" 
        sx={{width:{sm:'95%', xs:'100%'}, margin:'auto', display:{md:'none', xs:'flex'}}}>
          <Grid item xs={12}  >
            <Box sx={{width:'95%', margin:'auto'}}>
            <Accordion expanded={expandedSmall === 'capgemini'} onChange={handleChangeSmall('capgemini')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className = 'experiences-accordion'
                sx={{justifyContent:'center'}}
              >
                <img src={require('./CompanyLogo/capgemini.png')} alt='Capgemini' style={{height:20}}/>
                <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:{xs:1, md: 0} }}>
                  Capgemini
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <TimelineComponent content={capgemini} />
              </AccordionDetails>
            </Accordion>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box sx={{width:'95%', margin:'auto'}}>
            <Accordion expanded={expandedSmall === 'freelancer'} onChange={handleChangeSmall('freelancer')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel2bh-header"
                className='experiences-accordion'
                sx={{justifyContent:'center !important'}}
              >
                <img src={require('./CompanyLogo/freelancer.png')} alt='Capgemini' style={{height:20}}/>
                <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:{xs:1, md: 0} }}>
                  Freelancer
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <TimelineComponent content={freelancer} />
              </AccordionDetails>
            </Accordion>
            </Box>
          </Grid>
        </Grid>

        {/* Viewed in big screen */}

        <Grid container columnSpacing={1} rowSpacing={2} style={{padding:20}} justifyContent="center" 
        sx={{width:{lg:'90%', md:'95%'}, margin:'auto', display:{md:'flex', xs:'none'}}}>
          <Grid item xs={6}  >
            <Box sx={{width:'95%', margin:'auto'}}>
            <Accordion expanded={expanded === 'capgemini'} onChange={handleChange('capgemini')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className = 'experiences-accordion'
                sx={{justifyContent:'center'}}
              >
                <img src={require('./CompanyLogo/capgemini.png')} alt='Capgemini' style={{height:20}}/>
                <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:{xs:1, md: 0} }}>
                  Capgemini
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <TimelineComponent content={capgemini} />
              </AccordionDetails>
            </Accordion>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Box sx={{width:'95%', margin:'auto'}}>
            <Accordion expanded={expanded === 'freelancer'} onChange={handleChange('freelancer')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel2bh-header"
                className='experiences-accordion'
                sx={{justifyContent:'center !important'}}
              >
                <img src={require('./CompanyLogo/freelancer.png')} alt='Capgemini' style={{height:20}}/>
                <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:{xs:1, md: 0} }}>
                  Freelancer
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <TimelineComponent content={freelancer} />
              </AccordionDetails>
            </Accordion>
            </Box>
          </Grid>
        </Grid>

        </Fade>

      </Box>
    </div>
  )
}

export default Projects;