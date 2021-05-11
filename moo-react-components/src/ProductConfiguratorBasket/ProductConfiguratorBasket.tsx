import React, { FC, useState, useEffect } from 'react';

import Button from '../Button/Button';
import BasketItem from '../BasketItem/BasketItem';
import { defaultTheme } from '../theme';
import {
  Wrapper,
  Header,
  TotalPriceWrapper,
  ActionsWrapper,
  BasketItemsWrapper,
} from './styles';
import type { SelectedProduct } from '../types';

export interface ProductConfiguratorBasketProps {
  selectedProducts: Array<SelectedProduct>;
  onRemoveFromBasket(id: string): void;
}

const ProductConfiguratorBasket: FC<ProductConfiguratorBasketProps> = ({
  selectedProducts,
  onRemoveFromBasket,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateTotal = () => {
    const total = selectedProducts.reduce(
      (acc: number, cur: SelectedProduct) => {
        const newTotal = Math.round((acc + cur.price) * 100) / 100;
        return newTotal;
      },
      0,
    );
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
      <Header fullPage={isCheckout}>
        <TotalPriceWrapper fullPage={isCheckout}>
          <p>Total price:</p>
          <p>£{totalPrice.toFixed(2)}</p>
        </TotalPriceWrapper>
        <ActionsWrapper fullPage={isCheckout}>
          {isCheckout ? (
            <>
              <Button onClick={() => setIsCheckout(false)}>
                Continue shopping
              </Button>
              <Button
                color={defaultTheme.palette.cool}
                onClick={() => window.alert('Coming soon 🙈!')}
                disabled={totalPrice === 0}
                inverse
              >
                Proceed to payment
              </Button>
            </>
          ) : (
            <Button
              color={defaultTheme.palette.common.white}
              onClick={handleCheckout}
              disabled={totalPrice === 0}
              inverse
            >
              Checkout
            </Button>
          )}
        </ActionsWrapper>
      </Header>
      {isCheckout && (
        <BasketItemsWrapper>
          {selectedProducts.map((p: SelectedProduct) => (
            <BasketItem
              key={p.id}
              item={p}
              onRemoveFromBasket={onRemoveFromBasket}
            />
          ))}
        </BasketItemsWrapper>
      )}
    </Wrapper>
  );
};

export default ProductConfiguratorBasket;
