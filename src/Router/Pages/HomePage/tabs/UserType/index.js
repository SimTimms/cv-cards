import React from 'react';
import { useStyles } from '../../../../../styles';

export default function UserType({ setUserType, userType, setPage }) {
  const classes = useStyles();

  return (
    <div className={classes.divider}>
      <div style={{ margin: 'auto' }}>
        <button
          title="Developer"
          className={classes.registerButton}
          onClick={() => {
            setUserType('dev');
            setPage('skills');
          }}
          style={{
            textDecoration: userType === 'dev' ? 'underline' : 'none',
            color: userType === 'dev' && '#222',
          }}
        >
          Developer
        </button>
        <button
          title="Recruiter"
          className={classes.registerButton}
          onClick={() => {
            setUserType('recruiter');
            setPage('req');
          }}
          style={{
            textDecoration: userType === 'recruiter' ? 'underline' : 'none',
            color: userType === 'recruiter' && '#222',
          }}
        >
          Recruiter
        </button>
      </div>
    </div>
  );
}
