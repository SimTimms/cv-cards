import moment from 'moment';
import { Typography } from '@mui/material';

export function years(first, last) {
  const totalYears = last.diff(first, 'years');
  const height = 100 / totalYears;

  const yearArr = [];
  for (
    let i = moment(first).format('YYYY');
    i <= moment(last).format('YYYY');
    i++
  ) {
    yearArr.push(
      <div
        style={{
          width: '100%',
          height: `${height}%`,
          maxHeight: `${height}%`,
          overflow: 'hidden',
          background: '#fafafa',
        }}
      >
        <Typography variant="body2">{i}</Typography>
      </div>
    );
  }
  return yearArr;
}
