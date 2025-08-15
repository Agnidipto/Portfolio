import Timeline from '@mui/lab/Timeline';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { timelineOppositeContentClasses } from '@mui/lab';
import EachItem from './EachItem';

import Heading from './Heading';

const MyJourney = ({ direction }) => {

  const CapgeminiLogo = '/images/home/experience/capgemini.png';
  const FreelancerLogo = '/images/home/experience/freelancer.png';

  return (<>
    <Heading />
    <Timeline
      position = {direction === 'alternate' ? 'alternate' : null}
      sx={direction === 'left' ? { [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 } } : {}}
    >
      <EachItem time={'2021-2023'} org='Capgemini' orgLogo={CapgeminiLogo}>
        <Typography variant='h6' color='secondary.light' sx={{ marginTop: '5px' }}>Senior Analyst</Typography>
        Have worked in Python and Oracle PL/SQL for 2 years. <br/><br/>Used SQL for handling Supply-Chain and Customs clearance data for client. Data include classification of items and item-related information, including Suppliers, Importers, Article weights and cost, Supply-Chain level data including data on Shipments and Consignments, and Customs level data, including Tariffs and Import Duties. <br/><br/>Used Python for scripting Automations for Data Monitoring and Engineering, and running Selenium scripts for testing and Web Scraping of Client data for internal usage.
      </EachItem>
      <EachItem time={'2021'} org='Capgemini' orgLogo={CapgeminiLogo}>
        <Typography variant='h6' color='secondary.light' sx={{ marginTop: '5px' }}>Intern</Typography>
        Have been trained in Full-Stack Development, with ReactJS, Spring Boot and PostgreSQL. <br/><br/>Worked on a client-based Project with a team for a Quiz Platform. Built the Rest APIs with Spring Boot and database with PostgreSQL. And built the Front End with ReactJS, with Semantic UI.
      </EachItem>
      <EachItem time={'2020 - 2021'} org='Freelancer' orgLogo={FreelancerLogo}>
        <Typography variant='h6' color='secondary.light' sx={{ marginTop: '5px' }}>Full-Stack Developer</Typography>
        Practice Full-Stack Development as a Freelancer till today.
        <br/><br/>Have produced efficient, responsive and high-quality work, depending on the client's needs. Made two Projects     for a client, including an Art-Blog Channel, and a Real-Estate platform where potential buyers and sellers can come to    gather more information.
      </EachItem >
      <EachItem time={'2018'} org='Freelancer' orgLogo={FreelancerLogo}>
        <Typography variant='h6' color='secondary.light' sx={{ marginTop: '5px' }}>Content-Writer</Typography>
        Have been a Freelance Content and Article writer for more than a year.
        <br/><br/>Have written more than 30 articles for different clients, ranging from Tech Magazines to Tourist  Magazines.   Have worked on multiple Team Based Projects for delivering high quality work, with managed Keywords and   SEO features.   Have also been a Content Writer for NSS, a government service scheme, where I have written articles   for the daily   activities going on in the community.
      </EachItem>

    </Timeline>
  </>
  );
};

const MyJourneyWrapper = ({ direction, secondRef }) => {
  const theme = useTheme();
  const smallerThanMid = useMediaQuery(theme.breakpoints.down('md'));

  if (smallerThanMid) {
    return <MyJourney direction={direction} />;
  }

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        boxShadow: 'none',
        marginTop: '100vh',
        paddingTop: '50vh',
        marginBottom: 200,
      }}
      ref={secondRef}
    >
      <MyJourney direction={direction}/>
    </div>
  );
};

export default MyJourneyWrapper;