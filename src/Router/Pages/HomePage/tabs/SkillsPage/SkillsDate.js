import { Mutation } from '@apollo/client/react/components';
import moment from 'moment';
import { useState } from 'react';
import { UPDATE_SKILLS } from '../../../../../data';
import { useStyles } from '../../../../../styles';
import { Typography } from '@mui/material';

export default function SkillsDate({
  item,
  skillDates,
  setSkillDates,
  setMySkills,
}) {
  const classes = useStyles();
  const [buttonState, setButtonState] = useState(0);
  const BUTTON_STATES = { 0: '', 1: 'Save', 2: 'Saved!', 3: 'Error' };
  return (
    <Mutation
      mutation={UPDATE_SKILLS}
      variables={{
        name: item.title,
        level: item.level,
        firstUsed: skillDates[item.title]
          ? moment(skillDates[item.title].firstUsed).format('YYYY-MM-DD')
          : '',
        lastUsed: skillDates[item.title]
          ? moment(skillDates[item.title].lastUsed).format('YYYY-MM-DD')
          : '',
      }}
      onCompleted={(data) => {
        setMySkills(data.updateSkills);
        setButtonState(2);
      }}
      onError={(error) => {
        setButtonState(3);
      }}
    >
      {(UpdateMutation) => {
        if (!skillDates[item.title]) {
          return <div></div>;
        }
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '360px',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body3">First Used</Typography>
              <input
                className={classes.inputDate}
                value={
                  skillDates[item.title].firstUsed
                    ? skillDates[item.title].firstUsed
                    : ''
                }
                onChange={(e) => {
                  const skillDatesTemp = { ...skillDates };
                  skillDatesTemp[item.title].firstUsed = e.target.value;
                  setSkillDates(skillDatesTemp);
                  e.target.value === '' &&
                  skillDatesTemp[item.title].lastUsed === ''
                    ? setButtonState(0)
                    : setButtonState(1);
                }}
                placeholder="1 May 2020"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Typography variant="body3">Last Used</Typography>
              <input
                className={classes.inputDate}
                value={
                  skillDates[item.title].lastUsed
                    ? skillDates[item.title].lastUsed
                    : ''
                }
                onChange={(e) => {
                  const skillDatesTemp = { ...skillDates };
                  skillDatesTemp[item.title].lastUsed = e.target.value;
                  setSkillDates(skillDatesTemp);
                  e.target.value === '' ? setButtonState(0) : setButtonState(1);
                }}
                placeholder="1 Jun 2022"
              />
            </div>

            <button
              className={classes.saveButton}
              onClick={() => UpdateMutation()}
              style={{ textDecoration: buttonState === 1 && 'underline' }}
            >
              {BUTTON_STATES[buttonState]}
            </button>
          </div>
        );
      }}
    </Mutation>
  );
}
