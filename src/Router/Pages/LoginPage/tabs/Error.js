import React from 'react';
import { useStyles } from '../../../../styles';

export default function ErrorPage({ setPage }) {
  const classes = useStyles();

  return (
    <div className={classes.inner}>
      <button
        title="That didn't work. Try Again"
        className={classes.registerButton}
        onClick={() => setPage(1)}
      >
        That didn't work - try again
      </button>
    </div>
  );
}
