import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    body2: { fontFamily: `'Courier Prime', monospace`, fontSize: '0.8rem' },
    body3: {
      fontFamily: `'Courier Prime', monospace`,
      fontSize: '0.6rem',
      margin: '0 0 0 3px',
    },
    h2: { fontFamily: `'Courier Prime', monospace`, fontSize: '1.8rem' },
    h3: { fontFamily: `'Courier Prime', monospace`, fontSize: '1.4rem' },
    h4: {
      fontFamily: `'Courier Prime', monospace`,
      fontSize: '1.2rem',
      marginTop: 60,
      marginBottom: 10,
    },
    h5: {
      fontFamily: `'Courier Prime', monospace`,
      fontSize: '1rem',
      marginTop: 5,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
