import { useStyles } from '../styles';
import { Typography } from '@mui/material';
import { Mutation } from '@apollo/client/react/components';
import { UPDATE_SKILLS } from '../data';

export default function RecruitementPreferences({
  setInterview,
  setEmployment,
  setSalary,
  setTechTest,
}) {
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Salary
        </Typography>
        <button
          onClick={() => {
            setSalary(0);
          }}
          className={classes.skillButton}
        >
          Competitive
        </button>
        <button
          onClick={() => {
            setSalary(25000);
          }}
          className={classes.skillButton}
        >
          25k
        </button>
        <button
          onClick={() => {
            setSalary(50000);
          }}
          className={classes.skillButton}
        >
          50k
        </button>
        <button
          onClick={() => {
            setSalary(70000);
          }}
          className={classes.skillButton}
        >
          70k
        </button>
        <button
          onClick={() => {
            setSalary(90000);
          }}
          className={classes.skillButton}
        >
          90k
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Tech Test
        </Typography>
        <button
          onClick={() => {
            setTechTest(0);
          }}
          className={classes.skillButton}
        >
          None
        </button>
        <button
          onClick={() => {
            setTechTest(1);
          }}
          className={classes.skillButton}
        >
          1 Hour
        </button>
        <button
          onClick={() => {
            setTechTest(2);
          }}
          className={classes.skillButton}
        >
          2 Hours
        </button>
        <button
          onClick={() => {
            setTechTest(3);
          }}
          className={classes.skillButton}
        >
          3 Hours
        </button>
        <button
          onClick={() => {
            setTechTest(4);
          }}
          className={classes.skillButton}
        >
          4+ Hours
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Interview Stages
        </Typography>
        <button
          onClick={() => {
            setInterview(1);
          }}
          className={classes.skillButton}
        >
          1
        </button>
        <button
          onClick={() => {
            setInterview(2);
          }}
          className={classes.skillButton}
        >
          2
        </button>
        <button
          onClick={() => {
            setInterview(3);
          }}
          className={classes.skillButton}
        >
          3+
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Employment
        </Typography>
        <button
          onClick={() => {
            setEmployment('Full-Time');
          }}
          className={classes.skillButton}
        >
          Full-Time
        </button>
        <button
          onClick={() => {
            setEmployment('Contract');
          }}
          className={classes.skillButton}
        >
          Contract
        </button>
        <button
          onClick={() => {
            setEmployment('Freelance');
          }}
          className={classes.skillButton}
        >
          Freelance
        </button>
      </div>
      <Mutation
        mutation={UPDATE_SKILLS}
        variables={{
          preferences: [{ employment: 'full-time' }],
        }}
        onCompleted={(data) => {
          console.log(data);
        }}
        onError={(error) => {
          console.log(error);
        }}
      >
        {(LoginMutation) => {
          return <button onClick={() => LoginMutation()}>Save</button>;
        }}
      </Mutation>
    </div>
  );
}
