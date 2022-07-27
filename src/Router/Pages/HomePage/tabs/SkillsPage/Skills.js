import React, { useEffect, useState } from 'react';
import {
  ARR_FRONT,
  ARR_BACK,
  ARR_DEPLOY,
  ARR_DATA,
  ARR_ENV,
  TEST_SKILLS,
  TEAM_SKILLS,
  DEV_SKILLS,
} from 'data/cards';
import { Typography } from '@mui/material';
import SkillButton from './SkillButton';
import { Mutation } from '@apollo/client/react/components';
import { UPDATE_SKILLS } from 'data';
import moment from 'moment';
import SkillsDate from './SkillsDate';
import SkillsDetails from './SkillsDetails';

const skillArr = [
  { name: 'Front End', skills: ARR_FRONT },
  { name: 'Back End', skills: ARR_BACK },
  { name: 'Code Management', skills: ARR_DEPLOY },
  { name: 'Data', skills: ARR_DATA },
  { name: 'Environments', skills: ARR_ENV },
  { name: 'Testing', skills: TEST_SKILLS },
  { name: 'Team', skills: TEAM_SKILLS },
  { name: 'Developer', skills: DEV_SKILLS },
];

function showHideElement(dateLevel, skillDates, title) {
  return (
    (dateLevel === 'date' || dateLevel === 'details') && !skillDates[title]
  );
}

export default function Skills({
  mySkills,
  setMySkills,
  skillSearch,
  dateLevel,
}) {
  const [skillDates, setSkillDates] = useState(null);

  useEffect(() => {
    const skillDatesTemp = {};
    for (let i = 0; i < mySkills.length; i++) {
      const item = mySkills[i];
      skillDatesTemp[item.name] = {
        firstUsed: item.firstUsed
          ? moment(item.firstUsed).format('YYYY MMM DD')
          : '',
        lastUsed: item.lastUsed
          ? moment(item.lastUsed).format('YYYY MMM DD')
          : '',
        description: item.description || '',
      };
    }
    setSkillDates(skillDatesTemp);
  }, [mySkills]);

  return skillArr.map((skillItem, index1) => {
    const filteredArr = skillItem.skills.filter((item) =>
      item.title.toLowerCase().includes(skillSearch.toLowerCase())
    );

    return (
      <div key={`div-div-${index1}`}>
        {filteredArr.length > 0 && (
          <Typography
            variant="body2"
            style={{ fontWeight: 'bold', marginTop: index1 > 0 ? 40 : 0 }}
          >
            {skillItem.name}
          </Typography>
        )}
        {filteredArr.map((item, index1) => {
          const levels = item.levels || [-1, 0, 1, 2, 3, 4];
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: index1 % 2 === 0 ? 'none' : '#eaeaea',
                padding: showHideElement(dateLevel, skillDates, item.title)
                  ? '0'
                  : '10px 0 10px 0',
              }}
              key={`${index1}--Buttona`}
            >
              {(!showHideElement(dateLevel, skillDates, item.title) ||
                dateLevel === 'level') && (
                <Typography variant="body2">{item.title}</Typography>
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  width: '360px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '360px',
                  }}
                >
                  {dateLevel === 'date' && (
                    <SkillsDate
                      skillDates={skillDates}
                      item={item}
                      setSkillDates={setSkillDates}
                      setMySkills={setMySkills}
                    />
                  )}
                  {dateLevel === 'details' && (
                    <SkillsDetails
                      skillDates={skillDates}
                      setSkillDates={setSkillDates}
                      item={item}
                      setMySkills={setMySkills}
                    />
                  )}
                  {dateLevel === 'level' &&
                    levels.map((button, index) => (
                      <Mutation
                        mutation={UPDATE_SKILLS}
                        variables={{
                          name: item.title,
                          level: button,
                        }}
                        onCompleted={(data) => {
                          setMySkills(data.updateSkills);
                        }}
                        onError={(error) => {
                          console.log(error);
                        }}
                        key={`${index}_buta`}
                      >
                        {(UpdateMutation) => {
                          return (
                            <SkillButton
                              button={button}
                              onClickEvent={() => UpdateMutation()}
                              active={
                                mySkills.filter(
                                  (obj) =>
                                    obj.name === item.title &&
                                    obj.level === button
                                ).length > 0
                              }
                              key={`${index}_butaa`}
                            />
                          );
                        }}
                      </Mutation>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  });
}
