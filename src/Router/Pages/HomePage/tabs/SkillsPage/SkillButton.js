import { useEffect, useState } from 'react';
import { useStyles } from '../../../../../styles';
import { Typography } from '@mui/material';

function buttonTranslate(inStr) {
  return inStr === -1
    ? 'N/A'
    : inStr === 0
    ? 'Exposure'
    : inStr === 1
    ? 'Junior'
    : inStr === 2
    ? 'Mid'
    : inStr === 3
    ? 'Senior'
    : 'Lead';
}
export default function SkillButton({ button, onClickEvent, active }) {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <button
      onClick={() => {
        onClickEvent();
        // setIsActive(isActive ? false : true);
      }}
      className={classes.skillButton}
      style={{
        background: isActive ? '#444' : 'none',
        color: isActive && '#fafafa',
        margin: 1,
      }}
    >
      <Typography variant="body2">{buttonTranslate(button)}</Typography>
    </button>
  );
}
