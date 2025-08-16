import Timeline from '@mui/lab/Timeline';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { timelineOppositeContentClasses } from '@mui/lab';
import EachItem from './EachItem';
import { Experience } from '../../../../Information';

import Heading from './Heading';

const MyJourney = ({ direction }) => {

  return (<>
    <Heading />
    <Timeline
      position = {direction === 'alternate' ? 'alternate' : null}
      sx={direction === 'left' ? { [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 } } : {}}
    >
      {Experience.map((item, index) => (
        <EachItem
          key={index}
          time={item.time}
          org={item.org}
          orgLogo={item.orgLogo}
          title={item.title}
          contents={item.contents}
        />
      ))}

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
    <Box
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
      <Box className='dark-bg-no-shadow'>
        <MyJourney direction={direction} />
      </Box>
    </Box>
  );
};

export default MyJourneyWrapper;