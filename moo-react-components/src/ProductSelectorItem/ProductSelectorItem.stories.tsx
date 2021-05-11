import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ThemeProvider } from '../theme';
import ProductSelectorItem, {
  ProductSelectorItemProps,
} from './ProductSelectorItem';

export default {
  title: 'Product Selector Item',
  component: ProductSelectorItem,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<ProductSelectorItemProps> = ({
  description,
  price,
  selected,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  return (
    <ProductSelectorItem
      description={description}
      price={price}
      selected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  description: 'Best notebook ever 📘',
  price: 9.99,
  selected: false,
};
