import React, { FC } from 'react';

import type { SelectedProduct } from '../types';
import Button from '../Button/Button';
import { defaultTheme } from '../theme';
import { Wrapper } from './styles';

export interface BasketItemProps {
  item: SelectedProduct;
  onRemoveFromBasket(id: string): void;
}

const BasketItem: FC<BasketItemProps> = ({ item, onRemoveFromBasket }) => {
  return (
    <Wrapper>
      <div>
        <p>{item['item-description']}</p>
      </div>
      <div>
        <p>£{item.price.toFixed(2)}</p>
        <Button
          color={defaultTheme.palette.hot}
          onClick={() => onRemoveFromBasket(item.id)}
        >
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default BasketItem;
