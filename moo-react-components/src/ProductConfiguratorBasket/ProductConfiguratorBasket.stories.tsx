import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductConfiguratorBasket, {
  ProductConfiguratorBasketProps,
} from './ProductConfiguratorBasket';
import { ThemeProvider } from '../theme';

export default {
  title: 'Product Basket',
  component: ProductConfiguratorBasket,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<ProductConfiguratorBasketProps> = ({
  selectedProducts,
  onRemoveFromBasket,
}) => {
  return (
    <ProductConfiguratorBasket
      selectedProducts={selectedProducts}
      onRemoveFromBasket={onRemoveFromBasket}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  selectedProducts: [
    {
      id: '1',
      'product-group-label': 'Hardcover Notebook',
      'product-group-id': 'hardcover-notebook',
      'item-description': 'Sunset notebook with dotted paper',
      attributes: [
        {
          id: 'cc1',
          type: 'cover-colour',
          value: 'red',
          label: 'Sunset',
        },
        {
          id: 'pt1',
          type: 'paper-type',
          value: 'dotted',
          label: 'Dotted paper',
        },
        {
          id: 'sc1',
          type: 'slip-case-included',
          value: false,
          label: 'Slipcase',
        },
      ],
      price: 17,
    },
    {
      id: '2',
      'product-group-label': 'Hardcover Notebook',
      'product-group-id': 'hardcover-notebook',
      'item-description': 'Ocean notebook with dotted paper',
      attributes: [
        {
          id: 'cc2',
          type: 'cover-colour',
          value: 'blue',
          label: 'Ocean',
        },
        {
          id: 'pt1',
          type: 'paper-type',
          value: 'dotted',
          label: 'Dotted paper',
        },
        {
          id: 'sc1',
          type: 'slip-case-included',
          value: false,
          label: 'Slipcase',
        },
      ],
      price: 18,
    },
    {
      id: '3',
      'product-group-label': 'Hardcover Notebook',
      'product-group-id': 'hardcover-notebook',
      'item-description': 'Sunset notebook with dotted paper and Slipcase',
      attributes: [
        {
          id: 'cc1',
          type: 'cover-colour',
          value: 'red',
          label: 'Sunset',
        },
        {
          id: 'pt1',
          type: 'paper-type',
          value: 'dotted',
          label: 'Dotted paper',
        },
        {
          id: 'sc2',
          type: 'slip-case-included',
          value: true,
          label: 'Slipcase',
        },
      ],
      price: 21.99,
    },
  ],
  onRemoveFromBasket: (id: string) => window.alert(`Remove ${id} from basket`),
};
