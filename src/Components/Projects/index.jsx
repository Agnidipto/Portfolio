import { Box, Divider, Grid } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import ButtonBase from '@mui/material/ButtonBase';
import ProjectInformation, { SkillList } from '../../Information';
import { useNavigate, useParams } from "react-router-dom";
import SideMenu from './SideMenu';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LazyLoadingFull from '../Utils/LazyLoading/LazyLoadingFull';
import Footer from '../Footer';
import { AnimationLayout, TransitionLayer } from '../TransitionLayer';

function Projects() {

  const { skill } = useParams();
  const ref = useRef(null);
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState(skill ? skill : 'All');
  const [loading, setLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectValue(skill ? skill : 'All');
  }, [skill]);

  function filterBy(project) {
    const regex = new RegExp( project.skills.join( "|" ), "i");
    return regex.test( skill );
  }

  const Projects = skill ? ProjectInformation.filter(filterBy) : ProjectInformation;

  function handleSelectChange(e) {
    e.preventDefault();
    setSelectValue(e.target.value);
    navigate(e.target.value === 'All' ? '/projects' : `/projects/${e.target.value}`);
  }

  const buttonStyle = {
    fontSize: '1rem',
    textAlign: { xs: 'center', md: 'left' },
    lineHeight: '1.4',
    wordSpacing: 1.2,
    width: '90%',
    borderRadius: '10px',
    transition: 'background-color 0.1s linear',
    '&:hover': { background: '#28262f' },
    // marginLeft:'1%'
  };

  const imgStyle = {
    width: '100%', objectFit: 'cover', borderRadius: 4, maxHeight: 300,
  };

  return (<>
    <TransitionLayer />
    <AnimationLayout>
      <div style={{ display: loading ? 'block' : 'none' }}>
        <LazyLoadingFull />
      </div>
      <Box sx={{ marginTop: '-65px', display: loading ? 'none' : 'block' }} ref={ref}>
        <div style={{ position: 'sticky', top: 0 }}>
          <Banner skill={skill} ref={ref} length={Projects.length} onLoad={handleLoad}/>
        </div>

        <div style={{ zIndex: 100, position: 'relative', marginTop: -5 }}  className='dark-bg'>

          <Box
            sx={{ display: { md: '', lg: 'none' }, width: '90%', margin: '20px auto', top: 80, position: 'sticky', zIndex: 101, background: 'black' }}
            className='dark-bg'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Skill</InputLabel>
              <Select
                labelId="Select Skill"
                id="select-skill"
                value={selectValue}
                label="Skill"
                onChange={handleSelectChange}
              >
                <MenuItem value={'All'}>All</MenuItem>
                <Divider />
                {SkillList.map((skill, index) => <MenuItem key={index} value={skill}>{skill}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>

          <Grid container>

            <Grid item lg={2} xs={0} sx={{ display: { lg: 'block', xs: 'none' },  borderRight: '1px solid grey' }}>
              <div style={{ position: 'sticky', top: 70 }}>
                <SideMenu skill={skill}/>
              </div>
            </Grid>

            <Grid item lg={10} xs={12}>
              <br/>
              {Projects.map((project, idx) => idx % 2 === 0 ?
                <>
                  {/* <Fade> */}

                  <ButtonBase
                    sx={{ ...buttonStyle, padding: { lg: '20px 30px', md: '20px 0px', xs: '20px 2%' } }} focusRipple={true}
                    onClick ={() => navigate(`/project/${project.redirectUrl}`)}>

                    <Grid container columnSpacing={1} rowSpacing={5} sx={{ padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' } }}
                      alignItems="center">
                      <Grid item md={6} xs={12} sx = {{ textAlign: { xs: 'center', md: 'left' } }} order={{ xs: 2, md: 1 }}>
                        <Box sx={{ width: { md: '70%', xs: '95%' }, margin: 'auto' }}>
                          {project.title}
                          <br/>
                          {project.content}
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12} order={{ xs: 1, md: 2 }} style={{ textAlign: 'center' }}>
                        <Box sx={{ width: { md: '70%', xs: 'auto' }, margin: 'auto' }}>
                          <img src={project.image} alt='Crafts' style={imgStyle} />
                        </Box>
                      </Grid>
                    </Grid>

                  </ButtonBase>

                  <br/> <br/>

                  {/* </Fade> */}
                </>  : <>
                  {/* <Fade> */}

                  <ButtonBase
                    sx={{ ...buttonStyle, padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' } }} focusRipple={true}
                    onClick ={() => navigate(`/project/${project.redirectUrl}`)}>

                    <Grid container columnSpacing={1} rowSpacing={5} sx={{ padding: { lg: '20px 50px', md: '20px 0px', xs: '20px 2%' } }}
                      alignItems="center">
                      <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                        <Box sx={{ width: { md: '70%', xs: 'auto' }, margin: 'auto' }}>
                          <img src={project.image} alt='Crafts' style={imgStyle} />
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12} sx = {{ textAlign: { xs: 'center', md: 'left' } }} >
                        <Box sx={{ width: { md: '70%', xs: '95%' }, margin: 'auto' }}>
                          {project.title}
                          <br/>
                          {project.content}
                        </Box>
                      </Grid>
                    </Grid>

                  </ButtonBase>

                  <br/>  <br/>
                  {/* </Fade> */}
                </>,
              )}
            </Grid>
          </Grid>
          <Footer />
        </div>

      </Box>

    </AnimationLayout>
  </>
  );
}

export default Projects;