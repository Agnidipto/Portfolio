import { useState, useRef, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useIsVisible } from '../../Utils/useIsVisible';
import SectionHeader from '../../Common/SectionHeader';
import Skill from './Skill';
import OtherSkill from './OtherSkill';

function SkillsAndExperience() {

  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const skillsRef = useRef();
  const tempVisible = useIsVisible(skillsRef);

  useEffect(() => {
    if (isSkillsVisible) {setIsSkillsVisible(true);}
    else {setIsSkillsVisible (tempVisible);}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempVisible]);

  const SkillData = [
    {
      head: 'ReactJS',
      image: '/images/home/skills/react.jpg',
      rating: 4.5,
    },
    {
      head: 'SpringBoot',
      image: '/images/home/skills/spring-boot.jpg',
      rating: 4,
    },
    {
      head: 'Java',
      image: '/images/home/skills/java.jpg',
      rating: 4,
    },
    {
      head: 'Python',
      image: '/images/home/skills/python.jpg',
      rating: 3.5,
    },

  ];

  const OtherSkillsData = [
    {
      head: 'NodeJS',
      image: '/images/home/otherSkills/node.png',
    },
    {
      head: 'PL/SQL',
      image: '/images/home/otherSkills/plsql.png',
    },
    {
      head: 'Redux',
      image: '/images/home/otherSkills/redux.png',
    },
    {
      head: 'Git',
      image: '/images/home/otherSkills/git.png',
    },
    {
      head: 'Android',
      image: '/images/home/otherSkills/android.png',
    },
    {
      head: 'IOT',
      image: '/images/home/otherSkills/iot.png',
    },
    {
      head: 'Embedded Systems',
      image: '/images/home/otherSkills/embedded.png',
    },
  ];

  return (
    <div>
      <Box>
        <SectionHeader text='Skills' sx={{ marginTop: 10 }}/>

        <Grid
          container
          columnSpacing={2}
          rowSpacing={0}
          sx={{
            paddingLeft: '2%',
            paddingRight: '2%',
            transition: 'all 0.5s ease',
          }}
          alignItems="stretch"
          ref={skillsRef}
        >

          {SkillData.map((skill, index) => (
            <Skill
              key={index}
              isSkillsVisible={isSkillsVisible}
              zIndex={SkillData.length - index}
              index={index}
              skillUrl={skill.url}
              image={skill.image}
              head={skill.head}
              rating={skill.rating}
            />
          ))}

        </Grid>

        <Grid
          container
          columnSpacing={3}
          rowSpacing={1}
          style={{ padding: 20 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h2"
              color="text.secondary"
              sx = {{
                marginBottom: { xs: 2, md: 0 },
              }}
            >
              Other Skills
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              columnSpacing={1}
              rowSpacing={1}
              justifyContent="center"
              alignItems="center"
            >
              {OtherSkillsData.map((skill, index) => (
                <OtherSkill
                  key={index}
                  head={skill.head}
                  image={skill.image}
                />
              ))}
            </Grid>
          </Grid>
        </Grid >
      </Box>
    </div>
  );
}

export default SkillsAndExperience;