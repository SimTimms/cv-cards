import { useStyles } from './styles';

export default function FullWrapper({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
