import { useStyles } from './styles';

export default function CentralWrapper({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
}
