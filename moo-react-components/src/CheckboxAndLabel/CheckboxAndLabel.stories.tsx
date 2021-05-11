import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CheckboxAndLabel, { CheckboxAndLabelProps } from './CheckboxAndLabel';
import { ThemeProvider } from '../theme';

export default {
  title: 'Checkbox and Label',
  component: CheckboxAndLabel,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<CheckboxAndLabelProps> = ({ name, label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxAndLabel
      name={name}
      label={label}
      checked={checked}
      onChange={setChecked}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  name: 'Checkbox Story',
  label: 'Checkbox Story',
};
