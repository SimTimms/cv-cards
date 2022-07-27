import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import * as AUTH from '../data';
import { useStyles } from '../../../../styles';

export default function Register({ setPage }) {
  const [parameters, setParameters] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  const classes = useStyles();

  return (
    <Mutation
      mutation={AUTH.SIGNUP_MUTATION}
      variables={{
        name: parameters.name,
        email: parameters.email,
        password: parameters.password,
      }}
      onCompleted={(data) => {
        setPage(2);
      }}
      onError={(error) => {
        setPage(3);
      }}
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
              value={parameters.name}
              onChange={(e) =>
                setParameters({ ...parameters, name: e.target.value })
              }
              className={classes.input}
              placeholder="Name"
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
              className={classes.registerButton}
              onClick={() => LoginMutation()}
            >
              Submit
            </button>
            <div className={classes.dividerLine}></div>
            <button
              title="Login"
              className={classes.registerButton}
              onClick={() => setPage(0)}
            >
              {`Back`}
            </button>
          </div>
        );
      }}
    </Mutation>
  );
}
