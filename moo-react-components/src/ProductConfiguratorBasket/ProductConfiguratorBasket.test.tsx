import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductConfiguratorBasket, {
  ProductConfiguratorBasketProps,
} from './ProductConfiguratorBasket';
import { ThemeProvider } from '../theme';
import { mockProducts } from '../ProductSelector/ProductSelector.stories';
import type { SelectedProduct } from '../types';

const calculateTotalPrice = (products: SelectedProduct[]) =>
  products.reduce((acc: number, cur: SelectedProduct) => {
    const newTotal = Math.round((acc + cur.price) * 100) / 100;
    return newTotal;
  }, 0);

describe('<ProductConfiguratorBasket />', () => {
  let props: ProductConfiguratorBasketProps;

  beforeEach(() => {
    props = {
      selectedProducts: [mockProducts[0], mockProducts[1]],
      onRemoveFromBasket: jest.fn(),
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <ProductConfiguratorBasket {...props} />
      </ThemeProvider>,
    );

  it('Should render with correct total price', () => {
    const { getByTestId } = renderComponent();
    const totalPriceElement = getByTestId('total-price-figure');

    const total = calculateTotalPrice(props.selectedProducts);

    expect(totalPriceElement).toHaveTextContent(`£${total.toFixed(2)}`);
  });

  it('Should update total price correctly', () => {
    props.selectedProducts.push(mockProducts[2]);
    const { getByTestId } = renderComponent();
    const totalPriceElement = getByTestId('total-price-figure');

    const total = calculateTotalPrice(props.selectedProducts);

    expect(totalPriceElement).toHaveTextContent(`£${total.toFixed(2)}`);
  });
});
