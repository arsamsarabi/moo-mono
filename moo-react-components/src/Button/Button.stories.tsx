import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';
import { ThemeProvider } from '../theme';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<ButtonProps> = ({ color, inverse, disabled }) => {
  return (
    <Button color={color} inverse={inverse} disabled={disabled}>
      Click me!
    </Button>
  );
};

export const Example = Template.bind({});
Example.args = {
  color: 'hotpink',
  inverse: false,
  disabled: false,
};
