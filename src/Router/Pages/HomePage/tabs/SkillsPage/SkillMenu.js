import { useStyles } from '../../../../../styles';

export default function SkillMenu({ setDateLevel, dateLevel }) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <button
        className={classes.registerButton}
        onClick={() => setDateLevel('level')}
        style={{
          textDecoration: dateLevel === 'level' ? 'underline' : 'none',
          color: dateLevel === 'level' && '#222',
        }}
      >
        Level
      </button>
      <button
        className={classes.registerButton}
        onClick={() => setDateLevel('date')}
        style={{
          textDecoration: dateLevel === 'date' ? 'underline' : 'none',
          color: dateLevel === 'date' && '#222',
        }}
      >
        Dates
      </button>
      <button
        className={classes.registerButton}
        onClick={() => setDateLevel('details')}
        style={{
          textDecoration: dateLevel === 'details' ? 'underline' : 'none',
          color: dateLevel === 'details' && '#222',
        }}
      >
        Details
      </button>
    </div>
  );
}
