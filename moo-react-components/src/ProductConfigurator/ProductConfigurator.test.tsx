import 'jest-styled-components';
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import each from 'jest-each';

import ProductConfigurator, {
  ProductConfiguratorProps,
  DEFAULT_COLORS,
  DEFAULT_PAPER_TYPES,
} from './ProductConfigurator';
import { ThemeProvider } from '../theme';

describe('<ProductConfigurator />', () => {
  let props: ProductConfiguratorProps;

  beforeEach(() => {
    props = {
      productName: 'Iron Man A4 poster',
      handleAddToBasket: jest.fn(),
      handleDiscard: jest.fn(),
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <ProductConfigurator {...props} />
      </ThemeProvider>,
    );

  each(DEFAULT_PAPER_TYPES).test(
    'Should render paper type options correctly',
    ({ id }) => {
      const { getByTestId } = renderComponent();
      expect(getByTestId(`test-${id}`)).toBeInTheDocument();
    },
  );

  each(DEFAULT_COLORS).test(
    'Should render color options correctly',
    ({ id }) => {
      const { getByTestId } = renderComponent();
      expect(getByTestId(`test-${id}`)).toBeInTheDocument();
    },
  );

  it('Should fire handleDiscard correctly', () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId('discard-button');
    fireEvent.click(button);
    expect(props.handleDiscard).toHaveBeenCalledTimes(1);
  });
});
