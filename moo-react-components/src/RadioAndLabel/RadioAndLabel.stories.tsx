import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RadioAndLabel from './RadioAndLabel';
import { ThemeProvider } from '../theme';

export default {
  title: 'Radio and Label',
  component: RadioAndLabel,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

interface RadioOptions {
  name: string;
  label: string;
  value: string;
}

interface RadioStoryProps {
  radioOptions: RadioOptions[];
}

const Template: Story<RadioStoryProps> = ({ radioOptions }) => {
  const [selected, setSelected] = useState('randomId-1');
  return (
    <>
      {radioOptions.map(({ name, label, value }: RadioOptions) => (
        <RadioAndLabel
          key={value}
          name={name}
          label={label}
          value={value}
          selected={selected === value}
          onChange={setSelected}
        />
      ))}
    </>
  );
};

export const Example = Template.bind({});
Example.args = {
  radioOptions: [
    {
      name: 'Radio 1',
      label: 'Radio 1',
      value: 'randomId-1',
    },
    {
      name: 'Radio 2',
      label: 'Radio 2',
      value: 'randomId-2',
    },
    {
      name: 'Radio 3',
      label: 'Radio 3',
      value: 'randomId-3',
    },
  ],
};
