import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import BasketItem, { BasketItemProps } from './BasketItem';
import { ThemeProvider } from '../theme';

describe('<BasketItem />', () => {
  let props: BasketItemProps;

  beforeEach(() => {
    props = {
      item: {
        id: 'uuidv4',
        'item-description': 'Best notebook on 🌍!',
        'product-group-label': 'Harcover notebooks',
        price: 100,
      },
      onRemoveFromBasket: jest.fn(),
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <BasketItem {...props} />
      </ThemeProvider>,
    );

  it('Should render correctly', () => {
    const { getByTestId } = renderComponent();
    const description = getByTestId('item-description');

    expect(description.innerText).toEqual(props['item-description']);
  });

  it('Should fire onRemoveFromBasket correctly', () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId('remove-from-basket-button');
    fireEvent.click(button);
    expect(props.onRemoveFromBasket).toHaveBeenCalledTimes(1);
    expect(props.onRemoveFromBasket).toHaveBeenLastCalledWith(props.item.id);
  });
});
