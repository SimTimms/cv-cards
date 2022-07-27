import moment from 'moment';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export function genTime(view) {
  const combArr = view;
  combArr.sort((a, b) => new Date(b.firstUsed) - new Date(a.firstUsed));
  return (
    <Timeline position="right">
      {combArr.map((item, index) => (
        <TimelineItem key={`index-${item.title}`}>
          <TimelineOppositeContent variant="body2" color="text.secondary">
            <p>
              <b>{`${moment(item.firstUsed).format('MMM YY')} `}</b>
              <br />
              to
              <br />
              <b>{`${moment(item.lastUsed).format('MMM YY')}`}</b>
            </p>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ m: '0  auto 0 auto' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            align="left"
            variant="body2"
            color="text.secondary"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 5,
              border: '1px dashed #aaa',
            }}
          >
            {item.title}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: 3,
              }}
            >
              {item.tech &&
                item.tech.map((tech, index) => (
                  <img
                    src={tech.img}
                    style={{ height: 12, padding: 3 }}
                    key={`${index}-img2`}
                  />
                ))}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
