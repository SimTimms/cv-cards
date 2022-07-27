import { useStyles } from '../styles';
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
export default function SkillButton({ button, skill, updateFilter, filter }) {
  const classes = useStyles();

  const exists = filter.filter(
    (filterItem) => filterItem.item === skill && filterItem.level === button
  );

  return (
    <button
      onClick={() => {
        updateFilter();
      }}
      className={classes.skillButton}
      style={{
        background: exists.length > 0 ? '#444' : 'none',
        color: exists.length > 0 && '#fafafa',
        margin: 1,
      }}
    >
      <Typography variant="body2">{buttonTranslate(button)}</Typography>
    </button>
  );
}
