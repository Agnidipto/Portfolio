import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { Typography } from '@mui/material';

const EachItem = ({ time, org, orgLogo, title, contents }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color='text.secondary'>
        <div style={{ marginTop: 10 }}>
          {org}
          <br/> {time}
        </div>

      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{ padding: 0, background: 'none' }}>
          <div
            style={{ display: 'inline-block', height: 30, width: 30, borderRadius: '50%', background: '#252525', padding: 5 }}>
            <img alt={org} src={orgLogo} style={{ width: '100%' }}/>
          </div>
        </TimelineDot>
        {<TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent style={{ marginBottom: 20 }}>
        <Typography variant='h6' color='secondary.light' sx={{ marginTop: '5px' }}>{title}</Typography>
        <ul style={{ paddingLeft: 15, paddingTop: 15 }}>
          {contents.map((content, index) => <li key={index}>{content}</li>)}
        </ul>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EachItem;