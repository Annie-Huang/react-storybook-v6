import React from 'react';
import Center from '../src/components/Center/Center';
import { ChakraProvider, extendTheme, Theme, CSSReset } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

// Global decorators
// Another way to do this is: decorators = [(story) => <Center>{story()}</Center>],
export const decorators = [
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
];

// Theming from ChakraProvider doesn't seem to work.
// const colors = {
//   colors: {
//     brand: {
//       900: '#1a365d',
//       800: '#153e75',
//       700: '#2a69ac',
//     },
//   },
// };
// const theme = extendTheme({ colors });
// export const decorators = [
//   (Story) => (
//     <ChakraProvider theme={theme}>
//       <Center>
//         <Story />
//       </Center>
//     </ChakraProvider>
//   ),
// ];
