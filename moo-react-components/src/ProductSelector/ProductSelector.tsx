import React, { FC, useEffect, useState } from 'react';

import type { ProductType, CustomProductType } from '../types';
import ProductSelectorItem from '../ProductSelectorItem/ProductSelectorItem';
import ProductConfigurator from '../ProductConfigurator/ProductConfigurator';
import ProductConfiguratorTotalPrice from '../ProductConfiguratorTotalPrice/ProductConfiguratorTotalPrice';
import Button from '../Button/Button';
import { Wrapper, AlertWraper, ConfirmationAlert } from './styles';

export interface ProductSelectorProps {
  products: ProductType[];
  productName: string;
}

const ProductSelector: FC<ProductSelectorProps> = ({
  products,
  productName,
}) => {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showConfigurator, setShowConfigurator] = useState<boolean>(false);
  const [showConfirmationAlert, setShowConfirmationAlert] =
    useState<boolean>(false);

  const calculateTotal = () => {
    const total = selectedProductIds.reduce((acc: number, cur: string) => {
      const price: number = products.find(
        (p: ProductType) => p.id === cur,
      ).price;
      const newTotal = Math.round((acc + price) * 100) / 100;
      return newTotal;
    }, 0);
    setTotalPrice(total);
  };

  const handleOnSelectorItemClick = (productId: string) => {
    const isSelected: boolean = selectedProductIds.includes(productId);
    const { price }: ProductType = products.find(
      (p: ProductType) => p.id === productId,
    );

    if (isSelected) {
      setSelectedProductIds(
        selectedProductIds.filter((id) => id !== productId),
      );
      const newTotal = Math.round((totalPrice - price) * 100) / 100;
      setTotalPrice(newTotal);
    } else {
      setSelectedProductIds([...selectedProductIds, productId]);
      const newTotal = Math.round((totalPrice + price) * 100) / 100;
      setTotalPrice(newTotal);
    }
  };

  const handleOnCheckout = () => {
    window.alert('checkout');
  };

  const handleAddToBasket = (customProduct: CustomProductType) => {
    const newTotal = Math.round((totalPrice + customProduct.price) * 100) / 100;
    setTotalPrice(newTotal);
    setShowConfigurator(false);
    setShowConfirmationAlert(true);
    setTimeout(() => {
      setShowConfirmationAlert(false);
    }, 3000);

    // TODO: add custom product to basket
  };

  const handleDiscard = () => {
    setShowConfigurator(false);
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <Wrapper>
      <p>
        {'You can '}
        <Button
          onClick={() => setShowConfigurator(true)}
          disabled={showConfigurator}
        >
          Create your own
        </Button>
        {` ${productName}`} or select from the list of our pre configured
        {` ${productName}s`}
      </p>
      {showConfigurator && (
        <ProductConfigurator
          productName={productName}
          handleDiscard={handleDiscard}
          handleAddToBasket={handleAddToBasket}
        />
      )}
      {showConfirmationAlert && (
        <AlertWraper>
          <ConfirmationAlert>Custom product added to basket!</ConfirmationAlert>
        </AlertWraper>
      )}
      {products.map((product: ProductType) => (
        <ProductSelectorItem
          key={product.id}
          description={product['item-description']}
          price={product.price}
          selected={selectedProductIds.includes(product.id)}
          onClick={() => handleOnSelectorItemClick(product.id)}
        />
      ))}
      <ProductConfiguratorTotalPrice
        totalPrice={totalPrice}
        onCheckout={handleOnCheckout}
      />
    </Wrapper>
  );
};

export default ProductSelector;
