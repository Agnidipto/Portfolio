import {  Box } from '@mui/material';
import ProjectInformation from '../../../Information';
import ProjectGrid from './ProjectGrid';
import AllProjects from './AllProjects';
import SectionHeader from '../../Common/SectionHeader';

const Projects = () => {

  const projects = ProjectInformation.slice(0,3);

  return (
    <div>
      <Box >

        <SectionHeader text='Projects'/>

        {projects.map((project, idx) => (
          <ProjectGrid project={project} key={idx} even={idx % 2 === 0}/>
        ))}

        <AllProjects/>

      </Box>
    </div>
  );
};

export default Projects;