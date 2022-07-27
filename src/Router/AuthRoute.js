import { logoutFunction } from '../functions';
import { useStyles } from '../styles';
import { FullWrapper } from '../components';
import { Query } from '@apollo/client/react/components';
import { MY_SKILLS } from '../data';
import HomePage from './Pages/HomePage';

export default function AuthRoute({ setProfile }) {
  const classes = useStyles();

  return (
    <FullWrapper>
      <div className={classes.divider}>
        <button
          className={classes.registerButton}
          onClick={() => {
            logoutFunction(setProfile);
          }}
        >
          Logout
        </button>
      </div>
      <HomePage />
    </FullWrapper>
  );
}
