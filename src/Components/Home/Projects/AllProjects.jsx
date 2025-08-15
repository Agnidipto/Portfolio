import { Button, ButtonBase, Grid, Box, Typography } from '@mui/material';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';
import Fade from 'react-reveal/Fade';
import { useNavigation } from '../../Utils/hooks/navigation';

const SmallScreen = () => {

  const { navigateToProjects } = useNavigation();

  const buttonStyle = {
    background: '#1e1e1e',
    height: '50px',
    color: 'white',
    fontSize: '15px',
    width: '85%',
    marginTop: '15px',
    marginBottom: '15px',
    display: { xs: 'inline', md: 'none' },
  };

  return (
    <Fade>
      <Button variant="contained" color='primary'
        sx={buttonStyle}
        onClick={navigateToProjects}>
        View All Projects {'  '}<ArrowForwardIosRounded sx={{ marginLeft: 1, fontSize: '20px', marginBottom: 0.3 }}/>
      </Button>
      <br/>
    </Fade>
  );
};

const BigScreen = () => {

  const { navigateToProjects } = useNavigation();

  const buttonStyle = {
    fontSize: '1rem',
    textAlign: { xs: 'center', md: 'left' },
    lineHeight: 1.4,
    wordSpacing: 1.2,
    width: '90%',
    borderRadius: '10px',
    transition: 'background-color 0.1s linear',
    '&:hover': { background: '#28262f' },
    padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' },
    display: { xs: 'none', md: 'inline' },
  };

  return (
    <Fade>
      <ButtonBase sx={buttonStyle} focusRipple={true}
        onClick={navigateToProjects}>
        <Grid container columnSpacing={1} rowSpacing={5} sx={{ padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' } }}
          alignItems="center">
          <Grid item md={6} xs={12} sx = {{ textAlign: 'left' }}>
            <Box sx={{ width: { md: '70%', xs: '90%' }, margin: 'auto' }}>
              <Typography
                variant="h2"
                color="primary.light"
                sx={{
                  display: { xs: "block", lg: "block" },
                  fontSize: { md: "70px", lg: "80px" },
                  fontFamily: "Playfair Display, serif",
                  marginTop: { xs: 3, sm: 2, md: 0 },
                }}
              >
                All
              </Typography>

              <Typography
                variant="h1"
                color="primary.light"
                gutterBottom
                sx={{
                  display: { xs: "block", lg: "block" },
                  fontSize: { md: "70px", lg: "80px" },
                  fontFamily: "Playfair Display, serif",
                  marginTop: { xs: 3, sm: 2, md: 0 },
                }}
              >
                Projects
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{ textAlign: 'center' }}>
            <Box sx={{
              width: '70%',
              height: 300,
              backgroundColor: '#1e1e1e',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
            }}>
              <ArrowForwardIosRounded
                color='secondary'
                sx={{
                  fontSize: '80px',
                }} />
            </Box>
          </Grid>

        </Grid>
      </ButtonBase>
    </Fade>
  );
};

const AllProjects = () => {

  return (<>
    <SmallScreen/>
    <BigScreen/>
  </>);
};

export default AllProjects;