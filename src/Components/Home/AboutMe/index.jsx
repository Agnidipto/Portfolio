import { Grid, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import MyJourney from './MyJourney';
import LeftSection from './LeftSection';
import BigDevice from './AboutSection/BigDevice';
import { SmallDevice } from './AboutSection/SmallDevice';

function AboutMe() {

  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [secondRef, secondInView] = useInView({ threshold: 0 });

  return (
    <div>
      <Box ref={aboutRef}>
        <Grid container sx={{ marginTop: 5, paddingBottom: 0 }} id='about-section'>
          <Grid item md={6} xs={12}>
            <LeftSection inView={aboutInView}/>
          </Grid>
          <Grid item md={6} xs={12}>

            {/* small device */}
            <Box sx={{ width: '90%', margin: 'auto', display: { md: 'none', xs: 'block' } }}>
              <SmallDevice />
              <MyJourney direction='left'/>
            </Box>

            {/* big device */}

            <Box sx={{ margin: 'auto', width: '100%', display: { md: 'block', xs: 'none' } }}>
              <BigDevice
                aboutInView={aboutInView}
                secondInView={secondInView}
              />
              <MyJourney direction='left' secondRef={secondRef}/>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutMe;