import React, { FC, useState, useEffect } from 'react';

import Button from '../Button/Button';
import { defaultTheme } from '../theme';
import { Wrapper } from './styles';
import type { ProductType, CustomProductType } from '../types';

export interface ProductConfiguratorBasketProps {
  selectedProducts: Array<ProductType | CustomProductType>;
}

const ProductConfiguratorBasket: FC<ProductConfiguratorBasketProps> = ({
  selectedProducts,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateTotal = () => {
    const total = selectedProducts.reduce((acc: number, cur: ProductType) => {
      const newTotal = Math.round((acc + cur.price) * 100) / 100;
      return newTotal;
    }, 0);
    setTotalPrice(total);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  useEffect(() => {
    calculateTotal();
  }, [selectedProducts]);

  return (
    <Wrapper fullPage={isCheckout}>
      <p>Total price:</p>
      <p>£{totalPrice.toFixed(2)}</p>
      {isCheckout ? (
        <Button onClick={() => setIsCheckout(false)}>Continue shopping</Button>
      ) : (
        <Button
          color={defaultTheme.palette.common.white}
          onClick={handleCheckout}
          inverse
        >
          Checkout
        </Button>
      )}
    </Wrapper>
  );
};

export default ProductConfiguratorBasket;
