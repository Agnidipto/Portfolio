import {  Box, Typography, ButtonBase, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ProjectGrid = ({ project, even = false }) => {

  const navigate = useNavigate();

  const order = {
    image: even ? 1 : 2,
    content: even ? 2 : 1,
  };

  const imgStyle = {
    width: '100%', objectFit: 'cover', borderRadius: 4, maxHeight: 300,
  };

  const buttonStyle = {
    fontSize: '1rem',
    textAlign: { xs: 'center', md: 'left' },
    lineHeight: '1.4',
    wordSpacing: 1.2,
    width: '90%',
    borderRadius: '10px',
    transition: 'background-color 0.1s linear',
    '&:hover': { background: '#28262f' },
    padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' },
  };

  return (
    <Fade>
      <ButtonBase sx={buttonStyle} focusRipple={true}
        onClick={() => navigate('/project/1')}>
        <Grid container columnSpacing={1} rowSpacing={5} sx={{ padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' } }}
          alignItems="center">
          <Grid item md={6} xs={12} order={{ xs: 1, md: order['image'] }} sx={{ textAlign: 'center' }}>
            <Box sx={{ width: { md: '70%', xs: 'auto' }, margin: 'auto' }}>
              <img src={project.image} alt='Crafts' style={imgStyle} />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} order={{ xs: 2, md: order['content'] }} sx = {{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ width: { md: '70%', xs: '90%' }, margin: 'auto' }}>
              <Typography variant='h3' color='secondary.light'>
                {project.title}
              </Typography>
              <br/>
              <Typography variant='p' >
                {project.content}
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </ButtonBase>
      <br/>  <br/>
    </Fade>

  );
};

export default ProjectGrid;