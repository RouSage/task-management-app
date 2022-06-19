import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      '50': '#4B7BE5',
    },
    white: {
      '50': '#F8F6FF',
    },
    black: {
      '50': '#363942',
    },
  },
  shadows: {
    0: {
      elevation: 1,
      shadowColor: '#000000',
      shadowOffset: { height: 3, width: 3 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
    },
    1: {
      elevation: 2,
      shadowColor: '#000000',
      shadowOffset: { height: 8, width: 0 },
      shadowOpacity: 0.15,
      shadowRadius: 24,
    },
  },
  fontConfig: {
    Poppins: {
      400: {
        normal: 'Poppins',
      },
      500: {
        normal: 'Poppins-Medium',
      },
      600: {
        normal: 'Poppins-SemiBold',
      },
      700: {
        normal: 'Poppins-Bold',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

export default theme;
