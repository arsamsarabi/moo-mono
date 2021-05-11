import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SlipcaseSelector, { SlipcaseSelectorProps } from './SlipcaseSelector';
import { ThemeProvider } from '../theme';

export default {
  title: 'Slipcase selector',
  component: SlipcaseSelector,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<SlipcaseSelectorProps> = () => {
  const [selected, setSelected] = useState(false);
  return <SlipcaseSelector selected={selected} onChange={setSelected} />;
};

export const Example = Template.bind({});
Example.args = {};
