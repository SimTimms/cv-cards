import { Typography } from '@mui/material';

export default function Paper({ text }) {
  return (
    <Typography
      variant="body2"
      style={{
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        borderBottom: '1px solid #aaa',
        paddingBottom: 10,
        marginBottom: 10,
        width: '100%',
      }}
    >
      {text}
    </Typography>
  );
}
