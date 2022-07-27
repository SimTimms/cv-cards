import { years } from '../functions/years';
import moment from 'moment';
import { Typography } from '@mui/material';

export function genGraph(combArr) {
  combArr.sort((a, b) => new Date(a.firstUsed) - new Date(b.firstUsed));
  const first = moment(combArr[0].firstUsed);

  combArr.sort((a, b) => new Date(b.lastUsed) - new Date(a.lastUsed));

  const last = moment(combArr[0].lastUsed);
  const height = 100 / last.diff(first, 'days');
  combArr.sort((a, b) => new Date(a.firstUsed) - new Date(b.firstUsed));

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 40,
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        {years(first, last)}
      </div>
      {combArr.map((item, index) => {
        const thisFirst = moment(item.firstUsed);
        const last = moment(item.lastUsed);
        const thisHeight = last.diff(thisFirst, 'days') * height;
        const thisBlankHeight = thisFirst.diff(first, 'days') * height;

        return (
          <div
            style={{
              display: 'flex',
              width: `calc((100% - 40px) / ${combArr.length})`,
              flexDirection: 'column',
              height: '100%',
            }}
            key={`${item.title}-${index}`}
          >
            <Typography
              variant="body2"
              style={{
                height: `${thisBlankHeight}%`,
                width: `100%`,
                background: '#ddd',
                writingMode: 'vertical-rl',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                opacity: index % 2 ? 0.8 : 1,
              }}
            >
              {item.title}
            </Typography>
            <div
              style={{
                height: `${thisHeight}%`,
                width: `100%`,
                background: `repeating-linear-gradient(45deg,${
                  item.color ? item.color : '#ddd'
                },${item.color ? item.color : '#ddd'} 10px,${
                  item.color ? item.color : '#ccc'
                } 10px,${item.color ? item.color : '#ccc'} 20px)`,
                writingMode: 'vertical-rl',
                color: '#fff',
                opacity: index % 2 ? 0.8 : 1,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
