import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductConfigurator, {
  ProductConfiguratorProps,
} from './ProductConfigurator';
import { ThemeProvider } from '../theme';

export default {
  title: 'Product configurator',
  component: ProductConfigurator,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<ProductConfiguratorProps> = ({
  productName,
  handleAddToBasket,
  handleDiscard,
}) => {
  return (
    <ProductConfigurator
      productName={productName}
      handleAddToBasket={handleAddToBasket}
      handleDiscard={handleDiscard}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  productName: 'Awesome Stuffed Teddy bear',
  handleAddToBasket: () => window.alert('handleAddToBasket'),
  handleDiscard: () => window.alert('handleDiscard'),
};
