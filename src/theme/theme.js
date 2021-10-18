/* UTILS */
import scale from '../utils/scale.utils';

const theme = {
  palette: {
    primary: {
      main: '#1F2326',
      dark: '#1B1F22',
    },
    secondary: {
      main: '#80BB65',
    },
    text: {
      primary: '#fff',
      secondary: '#C0C0C0',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: scale(20),
    },
    h6: {
      fontWeight: 'bold',
      fontSize: scale(18),
    },
    body1: {
      fontWeight: 'bold',
      fontSize: scale(16),
    },
    body2: {
      fontWeight: 'normal',
      fontSize: scale(16),
    },
  },
  spacing: factor => 2 * factor,
};

export default theme;
