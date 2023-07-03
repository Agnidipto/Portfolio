import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem/TimelineItem';
import timelineItemClasses from '@mui/lab/TimelineItem/timelineItemClasses';
import TimelineSeparator from '@mui/lab/TimelineSeparator/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

function TimelineComponent(props) {
  return (
    <Timeline  sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>

      {props.content.map((content) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6'>
              {content.head}
            </Typography>
            <Typography variant='p'>
              {content.data}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default TimelineComponent;