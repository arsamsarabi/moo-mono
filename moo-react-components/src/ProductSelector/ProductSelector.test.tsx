import 'jest-styled-components';
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import ProductSelector, { ProductSelectorProps } from './ProductSelector';
import { ThemeProvider } from '../theme';
import { mockProducts } from '../mock/mockProducts';

describe('<ProductSelector />', () => {
  let props: ProductSelectorProps;

  beforeEach(() => {
    props = {
      products: mockProducts,
      productName: 'Hardcover notebooks',
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <ProductSelector {...props} />
      </ThemeProvider>,
    );

  it('Should not render <ProductConfigurator /> on the first render', () => {
    const { getByTestId } = renderComponent();
    expect(() => getByTestId('product-configurator-wrapper')).toThrow();
  });

  it('Should fire setShowConfigurator correctly', () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId('create-your-own-button');
    fireEvent.click(button);
    expect(getByTestId('product-configurator-wrapper')).toBeInTheDocument();
  });
});
