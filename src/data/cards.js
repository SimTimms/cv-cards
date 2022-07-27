import * as IMAGES from '../assets';

export const TEST_SKILLS = [
  {
    title: 'TestRail',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Sauce Labs',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Charles',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Jest',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Cypress.io',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
];

export const DEV_SKILLS = [
  {
    title: 'Golang',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'R',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'C#',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'Swift',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'Python',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'Java',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'VBA',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: '.Net',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'Angular',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'Vue',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'JQuery',
    description: '',
    visible: false,
    color: '#aaa',
  },
  {
    title: 'Rust',
    description: '',
    visible: false,
    color: '#aaa',
  },
];

export const TEAM_SKILLS = [
  {
    title: 'Standups',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Monday.com',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Jira',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'Excel',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
  {
    title: 'MS Access',
    description: '',
    visible: false,
    color: '#aaa',
    levels: [-1, 0],
  },
];

const CARD_3D = {
  title: 'ThreeJS',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.three,
  visible: false,
  lastUsed: new Date('2022/05/29'),
  firstUsed: new Date('2021/05/29'),
  color: '#aaa',
  level: 3,
};

export const CARD_REACT = {
  title: 'React',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: [CARD_3D],
  img: IMAGES.reactImg,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#70e1fc',
  level: 4,
};

const CARD_CSS = {
  title: 'CSS',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.css,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2011/10/01'),
  color: '#264de4',
  level: 4,
};

const CARD_MUI = {
  title: 'MUI',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.mui,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#0180ff',
  level: 2,
};

const CARD_WP = {
  title: 'WordPress',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.wp,
  visible: false,
};

const CARD_MONGO = {
  title: 'MongoDB',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.mongo,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
  level: 3,
};

const CARD_POSTGRES = {
  title: 'Postgres',
  description: '',
};
const CARD_MYSQL = {
  title: 'MySQL',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.mysql,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2012/05/29'),
  level: 3,
};

const CARD_SQL = {
  title: 'SQL',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.sql,
  visible: false,
  lastUsed: new Date('2022/01/23'),
  firstUsed: new Date('2019/05/29'),
  level: 2,
};

const CARD_GRAPH = {
  title: 'GraphQL',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.gql,
  visible: false,
  lastUsed: new Date('2022/05/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#e00198',
  level: 3,
};

const CARD_HTML = {
  title: 'HTML',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.html,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2011/05/29'),
  color: '#e85221',
  level: 4,
};

const CARD_GITHUB = {
  title: 'GitHub',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.github,
  visible: false,
  lastUsed: new Date('2022/06/23'),
  firstUsed: new Date('2017/05/29'),
  level: 2,
};

const CARD_BITBUCKET = {
  title: 'BitBucket',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.bitbucket,
  visible: false,
  lastUsed: new Date('2022/05/29'),
  firstUsed: new Date('2022/04/29'),
  level: 1,
};

const CARD_DEVOPS = {
  title: 'Devops',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.devops,
  visible: false,
  lastUsed: new Date('2022/01/23'),
  firstUsed: new Date('2019/05/29'),
  level: 1,
};

const CARD_JS = {
  title: 'Javascript',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.js,
  visible: false,
  lastUsed: new Date('2022/04/29'),
  firstUsed: new Date('2012/05/29'),
  color: '#e4a126',
  level: 3,
};

const CARD_PHP = {
  title: 'PHP',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.php,
  visible: false,
  lastUsed: new Date('2017/12/12'),
  firstUsed: new Date('2012/05/29'),
  color: '#787cb5',
  level: 2,
};

export const CARD_NODE = {
  title: 'Node.js',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.node,
  visible: false,
  lastUsed: new Date('2022/05/23'),
  firstUsed: new Date('2017/05/29'),
  color: '#84ce24',
  level: 3,
};

const CARD_AWS = {
  title: 'AWS',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.aws,
  visible: false,
  lastUsed: new Date('2022/05/29'),
  firstUsed: new Date('2017/04/29'),
  level: 2,
};

const CARD_AZURE = {
  title: 'Azure',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.azure,
  visible: false,
  lastUsed: new Date('2022/03/29'),
  firstUsed: new Date('2015/04/29'),
  level: 2,
};

const CARD_ACCESSIBE = {
  title: 'AccessiBe',
  description: 'ThreeJS is a library that renders 3d models in websites',
  children: null,
  img: IMAGES.access,
  visible: false,
  level: 1,
};
export const CARD_ONE = {
  title: 'Tim Simms',
  description:
    '“Throughout my 10 year career as a full-stack developer I have trained with international corporations and startups to build a broad range of skills that align with fast-paced, stable and affordable web development. Today, as a contract developer, I work both independently and within teams to ensure a smooth delivery of products that are on-time and on-budget.”',
  img: IMAGES.reactive,
  visible: true,
};

export const ARR_PRODUCTS = [
  {
    title: 'Websites',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: IMAGES.mui,
    visible: false,
    lastUsed: new Date('2022/01/23'),
    firstUsed: new Date('2011/05/29'),
  },
  {
    title: 'Web Apps',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: IMAGES.mui,
    visible: false,
    lastUsed: new Date('2022/01/23'),
    firstUsed: new Date('2012/05/29'),
  },
  {
    title: 'Promo Apps',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: IMAGES.mui,
    visible: false,
    lastUsed: new Date('2022/01/23'),
    firstUsed: new Date('2016/05/29'),
  },
  {
    title: 'Burns Effect',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: IMAGES.kb,
    visible: false,
    imgSize: 'cover',
  },
];

export const ARR_HIRING = [
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

export const ARR_DEPLOY = [CARD_GITHUB, CARD_BITBUCKET, CARD_DEVOPS];
export const ARR_DATA = [CARD_MONGO, CARD_SQL, CARD_MYSQL, CARD_POSTGRES];
export const ARR_ENV = [CARD_AWS, CARD_AZURE];
export const ARR_BACK = [CARD_NODE, CARD_GRAPH, CARD_PHP];
export const ARR_FRONT = [
  CARD_3D,
  CARD_REACT,
  CARD_HTML,
  CARD_CSS,
  CARD_JS,
  CARD_MUI,
];

export const ARR_EXPERIENCE = [
  {
    title: 'DoodleMeeple',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: IMAGES.dm,
    visible: false,
    lastUsed: '',
    firstUsed: '',
    color: '#57499e',
    tech: [
      CARD_AWS,
      CARD_REACT,
      CARD_NODE,
      CARD_HTML,
      CARD_CSS,
      CARD_MUI,
      CARD_MONGO,
      CARD_GRAPH,
    ],
  },
  {
    title: 'Mini Painter 3D',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    img: IMAGES.mp3d,
    visible: false,
    lastUsed: '',
    firstUsed: '',
    color: '#57499e',
    tech: [
      CARD_AWS,
      CARD_3D,
      CARD_REACT,
      CARD_NODE,
      CARD_HTML,
      CARD_CSS,
      CARD_MUI,
      CARD_MONGO,
      CARD_GRAPH,
    ],
  },
  {
    title: 'VMI Studio',
    description:
      'Freelance full-stack developer tasked with establishing a login, registration and analytics API with Node for an existing front-end system and to assist with developing pages for the React UI. These developments were deployed to AWS infrastructure and make use of AWS SES SDK, IAM, S3 and Elastic Beanstalk.',
    children: null,
    img: IMAGES.vmi,
    visible: false,
    lastUsed: new Date('2022/05/30'),
    firstUsed: new Date('2022/04/01'),
    color: '#57499e',
    tech: [
      CARD_AWS,
      CARD_3D,
      CARD_REACT,
      CARD_NODE,
      CARD_HTML,
      CARD_CSS,
      CARD_MUI,
    ],
  },
  {
    title: 'NHS - ESHT',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
    lastUsed: new Date('2022/03/30'),
    firstUsed: new Date('2020/11/01'),
    color: '#57499e',
    tech: [CARD_REACT, CARD_NODE, CARD_MUI],
  },
  {
    title: 'MSK Assist',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
    lastUsed: new Date('2020/11/01'),
    firstUsed: new Date('2017/01/01'),
    color: '#57499e',
  },
  {
    title: 'MSKNote',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
    lastUsed: new Date('2017/12/01'),
    firstUsed: new Date('2013/01/01'),
    color: '#57499e',
  },
  {
    title: 'GuildCare',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
    lastUsed: new Date('2019/12/01'),
    firstUsed: new Date('2017/12/01'),
    color: '#57499e',
  },
  {
    title: 'Northbrook College',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
    lastUsed: new Date('2017/12/01'),
    firstUsed: new Date('2015/12/01'),
    color: '#57499e',
  },
  {
    title: 'BrightLocal',
    description: 'ThreeJS is a library that renders 3d models in websites',
    children: null,
    visible: false,
    lastUsed: new Date('2019/12/01'),
    firstUsed: new Date('2016/12/01'),
    color: '#57499e',
  },
];

export const ARR_ACCESS = [CARD_ACCESSIBE];
