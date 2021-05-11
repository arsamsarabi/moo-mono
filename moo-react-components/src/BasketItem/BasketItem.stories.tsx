import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import BasketItem, { BasketItemProps } from './BasketItem';
import { ThemeProvider } from '../theme';

export default {
  title: 'Basket item',
  component: BasketItem,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<BasketItemProps> = ({ item, onRemoveFromBasket }) => {
  return <BasketItem onRemoveFromBasket={onRemoveFromBasket} item={item} />;
};

export const Example = Template.bind({});
Example.args = {
  item: {
    id: 'uuidv4',
    'item-description': 'Best notebook on 🌍!',
    price: 100,
  },
  onRemoveFromBasket: (id: string) => {
    window.alert(`Remove notebook with ID ${id}`);
  },
};
