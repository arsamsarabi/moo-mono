import React, { FC } from 'react';

import Button from '../Button/Button';
import { defaultTheme } from '../theme';
import { Wrapper } from './styles';

export interface ProductConfiguratorTotalPriceProps {
  totalPrice: number;
  onCheckout(): void;
}

const ProductConfiguratorTotalPrice: FC<ProductConfiguratorTotalPriceProps> = ({
  totalPrice,
  onCheckout,
}) => {
  return (
    <Wrapper>
      <p>Total price:</p>
      <p>£{totalPrice.toFixed(2)}</p>
      <Button
        color={defaultTheme.palette.common.white}
        onClick={onCheckout}
        inverse
      >
        Checkout
      </Button>
    </Wrapper>
  );
};

export default ProductConfiguratorTotalPrice;
