import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CoverColorSelector, {
  CoverColorSelectorProps,
} from './CoverColorSelector';
import { ThemeProvider } from '../theme';

export default {
  title: 'Cover colour selector',
  component: CoverColorSelector,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<CoverColorSelectorProps> = ({ colors }) => {
  const [selected, setSelected] = useState('cc4');
  return (
    <CoverColorSelector
      colors={colors}
      selectedColor={selected}
      onChange={setSelected}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  colors: [
    {
      id: 'cc1',
      type: 'cover-colour',
      value: 'red',
      label: 'Sunset',
    },
    {
      id: 'cc2',
      type: 'cover-colour',
      value: 'blue',
      label: 'Ocean',
    },
    {
      id: 'cc3',
      type: 'cover-colour',
      value: 'green',
      label: 'Mint',
    },
    {
      id: 'cc4',
      type: 'cover-colour',
      value: 'yellow',
      label: 'Sunny day',
    },
    {
      id: 'cc5',
      type: 'cover-colour',
      value: 'black',
      label: 'Dark night',
    },
  ],
};
