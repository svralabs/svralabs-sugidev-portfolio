import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f97316',
    },
    secondary: {
      main: '#f59e0b',
    },
    background: {
      default: '#1f2937',
      paper: '#374151',
    },
    text: {
      primary: '#f3f4f6',
      secondary: '#e5e7eb',
    },
  },
  typography: {
    fontFamily: [
      'Playfair Display',
      'Inter',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Playfair Display',
    },
    h2: {
      fontFamily: 'Playfair Display',
    },
    h3: {
      fontFamily: 'Playfair Display',
    },
    h4: {
      fontFamily: 'Playfair Display',
    },
    h5: {
      fontFamily: 'Playfair Display',
    },
    h6: {
      fontFamily: 'Playfair Display',
    },
    body1: {
      fontFamily: 'Inter',
    },
    body2: {
      fontFamily: 'Inter',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        '@keyframes scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
});

export default theme;
