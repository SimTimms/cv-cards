import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import * as AUTH from '../data';
import { useStyles } from 'styles';
import { loginFunction } from 'functions';

export default function Login({ setProfile, setPage }) {
  const [parameters, setParameters] = React.useState({
    email: '',
    password: '',
  });

  const globalClasses = useStyles();
  const classes = useStyles();
  return (
    <Mutation
      mutation={AUTH.LOGIN_MUTATION}
      variables={{ email: parameters.email, password: parameters.password }}
      onCompleted={async (data) => {
        loginFunction(data, setProfile);
      }}
      onError={(error) => {}}
    >
      {(LoginMutation) => {
        return (
          <div className={classes.inner} style={{ paddingBottom: 0 }}>
            <input
              value={parameters.email}
              onChange={(e) =>
                setParameters({ ...parameters, email: e.target.value })
              }
              className={classes.input}
              placeholder="Email"
            />
            <input
              value={parameters.password}
              type="password"
              onChange={(e) =>
                setParameters({ ...parameters, password: e.target.value })
              }
              className={classes.input}
              placeholder="Password"
            />
            <button
              title="Login"
              className={classes.loginButton}
              onClick={() => LoginMutation()}
            >
              Login
            </button>
            <button
              title="Register"
              className={classes.registerButton}
              onClick={() => setPage(1)}
            >
              Register
            </button>
          </div>
        );
      }}
    </Mutation>
  );
}
