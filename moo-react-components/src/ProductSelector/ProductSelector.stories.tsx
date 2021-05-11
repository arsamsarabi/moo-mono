import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductSelector, { ProductSelectorProps } from './ProductSelector';
import { ThemeProvider } from '../theme';
import { mockProducts } from '../mock/mockProducts';

export default {
  title: 'Product Selector',
  component: ProductSelector,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<ProductSelectorProps> = ({ productName, products }) => {
  return <ProductSelector productName={productName} products={products} />;
};

export const Example = Template.bind({});
Example.args = {
  products: mockProducts,
  productName: 'Hardcover Notebook',
};
