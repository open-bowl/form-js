/** @jsx h */
import { h } from 'preact';
import { Preview } from '@storybook/preact';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview; 