import { useState } from 'react';
import SkillMenu from './SkillMenu';
import { Typography } from '@mui/material';
import Skills from './Skills';
import { Paper, PaperNote } from 'components';

export default function SkillsPage({ mySkills, setMySkills }) {
  const [dateLevel, setDateLevel] = useState('level');
  const [skillSearch, setSkillSearch] = useState('');

  return (
    <Paper>
      <SkillMenu dateLevel={dateLevel} setDateLevel={setDateLevel} />
      <PaperNote
        text={
          dateLevel === 'level'
            ? `What level of each skill do you have?`
            : dateLevel === 'date'
            ? `When did you learn the skill, when did you last use it?`
            : `What have you achieved`
        }
      />

      {mySkills && (
        <Skills
          mySkills={mySkills}
          setMySkills={setMySkills}
          skillSearch={skillSearch}
          dateLevel={dateLevel}
        />
      )}
    </Paper>
  );
}
