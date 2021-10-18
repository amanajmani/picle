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
      fontSize: 20,
    },
    h6: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    body1: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    body2: {
      fontWeight: 'normal',
      fontSize: 16,
    },
    caption: {
      fontWeight: 'normal',
      fontSize: 14,
    },
  },
  spacing: factor => 2 * factor,
};

export default theme;
