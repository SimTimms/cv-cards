import React from 'react';
import { useStyles } from '../../../../../styles';

const recruiterMenu = [
  {
    title: 'Requirements',
    page: 'req',
  },
  {
    title: 'Job Spec',
    page: 'spec',
  },
  {
    title: 'Profiles',
    page: 'profiles',
  },
];

const devMenu = [
  {
    title: 'My Skills',
    page: 'skills',
  },
  {
    title: 'Preferences',
    page: 'preferences',
  },
  {
    title: 'Experience',
    page: 'experience',
  },
  {
    title: 'Contact Details',
    page: 'contact',
  },
  {
    title: 'Preview Profile',
    page: 'preview',
  },
];

export default function Menu({ setPage, page, userType }) {
  const classes = useStyles();

  return (
    <div className={classes.divider}>
      <div style={{ margin: 'auto' }}>
        {userType === 'recruiter' &&
          recruiterMenu.map((item, index) => (
            <button
              title="Requirements"
              className={classes.registerButton}
              onClick={() => setPage(item.page)}
              style={{
                textDecoration: page === item.page ? 'underline' : 'none',
                color: page === item.page && '#222',
              }}
              key={`menu_${index}`}
            >
              {item.title}
            </button>
          ))}

        {userType === 'dev' &&
          devMenu.map((item, index) => (
            <button
              title="Requirements"
              className={classes.registerButton}
              onClick={() => setPage(item.page)}
              style={{
                textDecoration: page === item.page ? 'underline' : 'none',
                color: page === item.page && '#222',
              }}
              key={`index2_${index}`}
            >
              {item.title}
            </button>
          ))}
      </div>
    </div>
  );
}
