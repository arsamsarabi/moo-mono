import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PaperTypeSelector, { PaperTypeSelectorProps } from './PaperTypeSelector';
import { ThemeProvider } from '../theme';

export default {
  title: 'Paper type selector',
  component: PaperTypeSelector,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<PaperTypeSelectorProps> = ({ paperTypes }) => {
  const [selected, setSelected] = useState('pt2');
  return (
    <PaperTypeSelector
      paperTypes={paperTypes}
      selectedType={selected}
      onChange={setSelected}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  paperTypes: [
    {
      id: 'pt1',
      type: 'paper-type',
      value: 'dotted',
      label: 'Dotted paper',
    },
    {
      id: 'pt2',
      type: 'paper-type',
      value: 'lined',
      label: 'Lined paper',
    },
  ],
};
