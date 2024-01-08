import {useState} from 'react';
import {Grid, Box, Typography} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimelineComponent from '../../../Utils/TimelineComponent';

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

function Experience(props) {

  const [expanded, setExpanded] = useState(false);
  const [expandedSmall, setExpandedSmall] = useState('capgemini');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeSmall = (panel) => (event, isExpanded) => {
    setExpandedSmall(isExpanded ? panel : false);
  };

  return <><Typography variant="h3" color="text.secondary">
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
            <img src={require('../CompanyLogo/capgemini.png')} alt='Capgemini' style={{height:20}}/>
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
            <img src={require('../CompanyLogo/freelancer.png')} alt='Capgemini' style={{height:20}}/>
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
            <img src={require('../CompanyLogo/capgemini.png')} alt='Capgemini' style={{height:20}}/>
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
            <img src={require('../CompanyLogo/freelancer.png')} alt='Capgemini' style={{height:20}}/>
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

    {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box> */}
    </>
}

export default Experience;