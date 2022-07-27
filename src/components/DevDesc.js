import { Typography } from '@mui/material';

export default function DevDesc({
  filter,
  techTest,
  interview,
  salary,
  employment,
}) {
  return (
    <div>
      <Typography variant="body2">
        <b>{`I'm looking for a developer with the following proficiencies: `}</b>
      </Typography>
      <br />
      {filter.map((item, index) => (
        <div style={{ display: 'flex' }} key={`div_${index}`}>
          <Typography variant="body2" style={{ color: '#555' }}>
            {`${
              item.level === 0
                ? 'Exposure to '
                : item.level === 1
                ? 'Junior Level '
                : item.level === 2
                ? 'Mid Level '
                : item.level === 3
                ? 'Senior Level '
                : 'Lead Level'
            } `}
          </Typography>
          <Typography
            variant="body2"
            style={{ fontWeight: 'bold', marginLeft: 10 }}
          >{`${item.item.title} `}</Typography>
        </div>
      ))}
      <Typography variant="body2">
        <br />
        <b>{`This is a ${employment} role`}</b>
      </Typography>
      <Typography variant="body2">
        <br />
        <b>{`The candidate will undergo a ${interview} stage interview process which ${
          techTest > 0 ? 'will ' : 'will not '
        } include a ${
          techTest > 0 ? `${techTest} hour` : ''
        } Technical Test. `}</b>
      </Typography>

      <Typography variant="body2">
        <br />
        <b>{`The salary is ${salary === 0 ? 'not declared' : `£${salary}`}`}</b>
      </Typography>
    </div>
  );
}
