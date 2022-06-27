import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import reactive from './reactive.png';
import dm from './dm.jpg';
import three from './three.png';
import reactImg from './react.png';
import css from './css.png';
import mui from './mui.png';
import wp from './wp.png';
import node from './node.png';
import mongo from './mongo.png';
import devops from './devops.png';
import github from './github.png';
import mp3d from './mp3d.png';
import bitbucket from './bitbucket.png';
import azure from './azure.png';
import aws from './aws.png';
import mysql from './mysql.png';
import php from './php.png';
import sql from './sql.png';
import html from './html.png';
import kb from './kb.png';
import gql from './gql.png';
import js from './js.png';
import access from './access.png';
import Wrapper from './Wrapper';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import moment from 'moment';
import { Grow } from '@mui/material';

function displayCards(cardArray, cardsArr, setCardsArr) {
  const newCardArray = [];

  if (cardArray === null) {
    return null;
  }
  for (let i = 0; i < cardArray.length; i++) {
    newCardArray.push(
      <Card
        card={cardArray[i]}
        delay={i}
        key={`${i}-${cardArray[i].title}`}
        cardsArr={cardsArr}
        setCardsArr={setCardsArr}
      />
    );
    if (cardArray[i].children) {
      //  newCardArray.push(displayCards(cardArray[i].children));
    }
  }
  return newCardArray;
}
const newCardObject = {};

function createCardObject(cardArray, index) {
  for (let i = 0; i < cardArray.length; i++) {
    newCardObject[`${index}-${i}`] = { ...cardArray[i], visible: false };
    if (cardArray[i].children) {
      createCardObject(cardArray[i].children, index + 1);
    }
  }

  return newCardObject;
}

const CARD_3D = {
  title: 'ThreeJS',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: three,
  visible: false,
  lastUsed: new Date('2022/05/29'),
  firstUsed: new Date('2021/05/29'),
  color: '#aaa',
};

const CARD_REACT = {
  title: 'React',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: [CARD_3D],
  img: reactImg,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#70e1fc',
};

const CARD_CSS = {
  title: 'CSS',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: css,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2011/10/01'),
  color: '#264de4',
};

const CARD_MUI = {
  title: 'MUI',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: mui,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#0180ff',
};

const CARD_WP = {
  title: 'WordPress',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: wp,
  visible: false,
};

const CARD_MONGO = {
  title: 'MongoDB',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: mongo,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
};

const CARD_MYSQL = {
  title: 'MySQL',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: mysql,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2012/05/29'),
};

const CARD_SQL = {
  title: 'SQL',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: sql,
  visible: false,
  lastUsed: new Date('2022/01/23'),
  firstUsed: new Date('2019/05/29'),
};

const CARD_GRAPH = {
  title: 'GraphQL',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: gql,
  visible: false,
  lastUsed: new Date('2022/05/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#e00198',
};

const CARD_HTML = {
  title: 'HTML',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: html,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2011/05/29'),
  color: '#e85221',
};

const CARD_GITHUB = {
  title: 'GitHub',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: github,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
};

const CARD_BITBUCKET = {
  title: 'BitBucket',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: bitbucket,
  visible: false,
  lastUsed: new Date('2022/05/29'),
  firstUsed: new Date('2021/06/29'),
};

const CARD_DEVOPS = {
  title: 'Devops',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: devops,
  visible: false,
  lastUsed: new Date('2022/01/23'),
  firstUsed: new Date('2019/05/29'),
};

const CARD_JS = {
  title: 'Javascript',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: js,
  visible: false,
  lastUsed: new Date('2022/04/29'),
  firstUsed: new Date('2012/05/29'),
  color: '#e4a126',
};

const CARD_PHP = {
  title: 'PHP',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: php,
  visible: false,
  lastUsed: new Date('2017/12/12'),
  firstUsed: new Date('2012/05/29'),
  color: '#787cb5',
};

const CARD_NODE = {
  title: 'Node.js',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: node,
  visible: false,
  lastUsed: new Date('2022/05/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#84ce24',
};

const CARD_AWS = {
  title: 'AWS',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: aws,
  visible: false,
  lastUsed: new Date('2022/05/29'),
  firstUsed: new Date('2017/04/29'),
};

const CARD_AZURE = {
  title: 'Azure',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: azure,
  visible: false,
  lastUsed: new Date('2022/03/29'),
  firstUsed: new Date('2015/04/29'),
};

const CARD_ACCESSIBE = {
  title: 'AccessiBe',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: access,
  visible: false,
};

const CARD_CONTACT = {
  title: 'Contact',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: 'back',
  visible: false,
};

const CARD_FRONT = {
  title: 'FRONT-END',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: 'back',
  visible: false,
};
const CARD_BACK = {
  title: 'BACK-END',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: 'back',
  visible: false,
};
const CARD_DATA = {
  title: 'DATABASE',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: 'back',
  visible: false,
};

const CARD_ONE = {
  title: 'Tim Simms',
  description:
    '“Throughout my 10 year career as a full-stack developer I have trained with international corporations and startups to build a broad range of skills that align with fast-paced, stable and affordable web development. Today, as a contract developer, I work both independently and within teams to ensure a smooth delivery of products that are on-time and on-budget.”',
  img: reactive,
  visible: true,
};

const ARR_PRODUCTS = [
  {
    title: 'Websites',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2022/01/23'),
    firstUsed: new Date('2011/05/29'),
  },
  {
    title: 'Web Apps',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2022/01/23'),
    firstUsed: new Date('2012/05/29'),
  },
  {
    title: 'Promo Apps',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2022/01/23'),
    firstUsed: new Date('2016/05/29'),
  },
  {
    title: 'Burns Effect',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: kb,
    visible: false,
    imgSize: 'cover',
  },
];

const ARR_HIRING = [
  {
    title: 'Quote',
    description: 'Your website or application built at a guaranteed fixed rate',
    children: null,
    visible: false,
  },
  {
    title: 'Fixed Price',
    description: 'Your website or application built at a guaranteed fixed rate',
    children: null,
    visible: false,
  },
  {
    title: '3 Month Contract',
    description:
      'Senior Full Stack Developer available for 3 months at £450 per day ',
    children: null,
    visible: false,
  },
  {
    title: '6 Month Contract',
    description:
      'Senior Full Stack Developer available for 3 months at £400 per day ',
    children: null,
    visible: false,
  },
  {
    title: 'Freelance',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
  },
];

const ARR_EXPERIENCE = [
  {
    title: 'DoodleMeeple',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: dm,
    visible: false,
    lastUsed: new Date(new Date()),
    firstUsed: new Date('2018/01/01'),
    color: '#57499e',
  },
  {
    title: 'Mini Painter 3D',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mp3d,
    visible: false,
    lastUsed: new Date(new Date()),
    firstUsed: new Date('2021/11/01'),
    color: '#57499e',
  },
  {
    title: 'VMI Studio',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2022/05/30'),
    firstUsed: new Date('2022/04/01'),
    color: '#57499e',
  },
  {
    title: 'NHS - ESHT',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2022/03/30'),
    firstUsed: new Date('2020/11/01'),
    color: '#57499e',
  },
  {
    title: 'MSK Assist',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2020/11/01'),
    firstUsed: new Date('2017/01/01'),
    color: '#57499e',
  },
  {
    title: 'MSKNote',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2017/12/01'),
    firstUsed: new Date('2013/01/01'),
    color: '#57499e',
  },
  {
    title: 'GuildCare',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2019/12/01'),
    firstUsed: new Date('2017/12/01'),
    color: '#57499e',
  },
  {
    title: 'Northbrook College',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2017/12/01'),
    firstUsed: new Date('2015/12/01'),
    color: '#57499e',
  },
  {
    title: 'BrightLocal',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: mui,
    visible: false,
    lastUsed: new Date('2019/12/01'),
    firstUsed: new Date('2016/12/01'),
    color: '#57499e',
  },
];

const ARR_DEPLOY = [CARD_GITHUB, CARD_BITBUCKET, CARD_DEVOPS];
const ARR_DATA = [CARD_MONGO, CARD_SQL, CARD_MYSQL];
const ARR_ENV = [CARD_AWS, CARD_AZURE];
const ARR_BACK = [CARD_NODE, CARD_GRAPH];
const ARR_FRONT = [
  CARD_3D,
  CARD_REACT,
  CARD_HTML,
  CARD_CSS,
  CARD_JS,
  CARD_MUI,
  CARD_PHP,
];
const ARR_ACCESS = [CARD_ACCESSIBE];

function genTime() {
  const combArr = [...ARR_DEPLOY, ...ARR_DATA, ...ARR_BACK, ...ARR_FRONT];
  combArr.sort((a, b) => new Date(b.firstUsed) - new Date(a.firstUsed));
  return (
    <Timeline position="right">
      {combArr.map((item) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{item.title}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function years(first, last) {
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

function genGraph(combArr) {
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
const theme = createTheme({
  typography: {
    body2: { fontFamily: `'Courier Prime', monospace`, fontSize: '0.8rem' },
    h2: { fontFamily: `'Courier Prime', monospace`, fontSize: '1.8rem' },
    h3: { fontFamily: `'Courier Prime', monospace`, fontSize: '1.4rem' },
    h4: {
      fontFamily: `'Courier Prime', monospace`,
      fontSize: '1.2rem',
      marginTop: 60,
      marginBottom: 10,
    },
    h5: {
      fontFamily: `'Courier Prime', monospace`,
      fontSize: '1rem',
      marginTop: 5,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  const [cards, setCards] = useState(CARD_ONE);
  const [view, setView] = useState([...ARR_FRONT, ...ARR_BACK]);
  const [cardsArr, setCardsArr] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          zIndex: 10,
          alignItems: 'center',
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            zIndex: 10,
            width: '30vw',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          {genGraph(view)}
        </div>
        <div
          style={{
            display: 'flex',
            zIndex: 10,
            alignItems: 'center',
            left: 0,
            width: '70vw',
            height: '100vh',
            overflow: 'auto',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h2">Tim Simms</Typography>
          <Typography variant="h3">Full-Stack Web Developer</Typography>
          <div
            style={{
              display: 'flex',
              zIndex: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <Typography
              variant="h5"
              onClick={() =>
                setView([
                  ...ARR_FRONT,
                  ...ARR_BACK,
                  ...ARR_DEPLOY,
                  ...ARR_DATA,
                  ...ARR_ENV,
                  ...ARR_EXPERIENCE,
                ])
              }
            >
              All
            </Typography>
            <Typography
              variant="h5"
              onClick={() => setView([...ARR_FRONT, ...ARR_BACK])}
            >
              Tech
            </Typography>
            <Typography variant="h5" onClick={() => setView([...ARR_DATA])}>
              Database
            </Typography>
            <Typography variant="h5" onClick={() => setView([...ARR_DEPLOY])}>
              Code Management
            </Typography>
            <Typography variant="h5" onClick={() => setView([...ARR_PRODUCTS])}>
              Products
            </Typography>
            <Typography
              variant="h5"
              onClick={() => setView([...ARR_EXPERIENCE])}
            >
              Experience
            </Typography>
            <Typography variant="h5" onClick={() => setView([...ARR_HIRING])}>
              Hire
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              zIndex: 10,
              alignItems: 'center',
              left: 0,
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <Wrapper>{displayCards(view, cardsArr, setCardsArr)}</Wrapper>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
