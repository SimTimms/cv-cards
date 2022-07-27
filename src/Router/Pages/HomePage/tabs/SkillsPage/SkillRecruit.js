import React, { useState } from 'react';
import {
  ARR_FRONT,
  ARR_BACK,
  ARR_DEPLOY,
  ARR_DATA,
  ARR_ENV,
} from '../data/cards';
import { Typography } from '@mui/material';
import SkillButton from './SkillButton';
import { Mutation } from '@apollo/client/react/components';
import { UPDATE_SKILLS } from '../data';

const buttonObjs = [-1, 0, 1, 2, 3, 4];

export default function Skills({ setFilter, filter, updateFilter }) {
  return [
    ...ARR_FRONT,
    ...ARR_BACK,
    ...ARR_DEPLOY,
    ...ARR_DATA,
    ...ARR_ENV,
  ].map((item, index1) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      key={`${index1}--Button`}
    >
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>
        {item.title}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {buttonObjs.map((button, index) => (
          <Mutation
            mutation={UPDATE_SKILLS}
            variables={{
              skills: { name: 'full-time' },
            }}
            onCompleted={(data) => {}}
            onError={(error) => {
              console.log(error);
            }}
            key={`${index}_butaax`}
          >
            {(LoginMutation) => {
              return (
                <SkillButton
                  button={button}
                  updateFilter={() =>
                    updateFilter(item, filter, setFilter, button)
                  }
                  filter={filter}
                  skill={item}
                  key={`${index}_but`}
                />
              );
            }}
          </Mutation>
        ))}
      </div>
    </div>
  ));
}
