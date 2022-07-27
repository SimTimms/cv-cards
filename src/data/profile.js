import {
  ARR_DATA,
  ARR_DEPLOY,
  ARR_PRODUCTS,
  ARR_EXPERIENCE,
  ARR_HIRING,
  ARR_FRONT,
  ARR_BACK,
  ARR_ENV,
  CARD_NODE,
  CARD_REACT,
} from '../data/cards';

const timSimms = {
  name: 'Tim Simms',
  email: 'tim@reactiveweb.co.uk',
  profile: '',
  competitive: false,
  maxInOfficeDays: -1,
  type: 'Full-Stack Web Developer - MERN',
  skills: [
    ...ARR_FRONT,
    ...ARR_BACK,
    ...ARR_DEPLOY,
    ...ARR_DATA,
    ...ARR_ENV,
    ...ARR_HIRING,
    ...ARR_EXPERIENCE,
    ...ARR_PRODUCTS,
  ],
};

const emmaHarris = {
  name: 'Emma Harris',
  email: 'tim@reactiveweb.co.uk',
  profile: '',
  competitive: false,
  maxInOfficeDays: -1,
  type: 'Full-Stack Web Developer - LAMP',
  skills: [
    { ...CARD_NODE, level: 3 },
    { ...CARD_REACT, level: 2 },
  ],
};

export const profileArray = [timSimms, emmaHarris];
