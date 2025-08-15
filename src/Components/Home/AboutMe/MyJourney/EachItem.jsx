import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';

const EachItem = ({ children, time, org, orgLogo }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color='text.secondary'>
        <div style={{ marginTop: 10 }}>
          {org}
          {/* <div
      style={{display:'inline-block', height:20, width:20, borderRadius:'50%', background:'#252525', padding:5, margin:10}}>
        <img alt={org} src={orgLogo} style={{width:'100%'}}/>
      </div> */}
          <br/> {time}
        </div>

      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{ padding: 0, background: 'none' }}>
          <div
            style={{ display: 'inline-block', height: 20, width: 20, borderRadius: '50%', background: '#252525', padding: 5 }}>
            <img alt={org} src={orgLogo} style={{ width: '100%' }}/>
          </div>
        </TimelineDot>
        {<TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent style={{ marginBottom: 20 }}>
        {children}
      </TimelineContent>
    </TimelineItem>
  );
};

export default EachItem;