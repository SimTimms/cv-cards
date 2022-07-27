import { Mutation } from '@apollo/client/react/components';
import { useState } from 'react';
import { UPDATE_SKILLS } from '../../../../../data';
import { useStyles } from 'styles';

export default function SkillsDetails({
  item,
  setMySkills,
  setSkillDates,
  skillDates,
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
        description: skillDates[item.title]
          ? skillDates[item.title].description
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
            <input
              className={classes.inputDetails}
              value={
                skillDates[item.title].description
                  ? skillDates[item.title].description
                  : ''
              }
              onChange={(e) => {
                const skillDatesTemp = { ...skillDates };
                skillDatesTemp[item.title].description = e.target.value;
                setSkillDates(skillDatesTemp);
                e.target.value === '' ? setButtonState(0) : setButtonState(1);
              }}
              placeholder={`I used ${item.title} for ${Math.floor(
                Math.random() * 12
              )} months whilst working at.....`}
            />
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
