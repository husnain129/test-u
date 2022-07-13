import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  button: {
    300: '#909ab9',
    400: '#828eb1',
    500: '#7481a8',
    600: '#687497',
    700: '#5d6786',
    800: '#515a76',
    900: '#464d65',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
