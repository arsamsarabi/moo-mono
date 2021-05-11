import React, { FC, useState } from 'react';

import type { ProductType, CustomProductType, SelectedProduct } from '../types';
import ProductSelectorItem from '../ProductSelectorItem/ProductSelectorItem';
import ProductConfigurator from '../ProductConfigurator/ProductConfigurator';
import ProductConfiguratorBasket from '../ProductConfiguratorBasket/ProductConfiguratorBasket';
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
  const [selectedProducts, setSelectedProducts] = useState<
    Array<SelectedProduct>
  >([]);
  const [showConfigurator, setShowConfigurator] = useState<boolean>(false);
  const [showConfirmationAlert, setShowConfirmationAlert] =
    useState<boolean>(false);

  const handleOnSelectorItemClick = (product: ProductType) => {
    const isSelected: boolean = selectedProducts
      .map((p: ProductType) => p.id)
      .includes(product.id);

    if (isSelected) {
      setSelectedProducts(
        selectedProducts.filter((p: ProductType) => p.id !== product.id),
      );
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleAddToBasket = (customProduct: CustomProductType) => {
    setSelectedProducts([...selectedProducts, customProduct]);
    setShowConfigurator(false);
    setShowConfirmationAlert(true);
    setTimeout(() => {
      setShowConfirmationAlert(false);
    }, 3000);
  };

  const handleRemoveFromBasket = (id: string) => {
    setSelectedProducts(
      selectedProducts.filter((p: ProductType) => p.id !== id),
    );
  };

  const handleDiscard = () => {
    setShowConfigurator(false);
  };

  return (
    <Wrapper>
      <p>
        {'You can '}
        <Button
          onClick={() => setShowConfigurator(true)}
          disabled={showConfigurator}
          data-testid="create-your-own-button"
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
          id={product.id}
          description={product['item-description']}
          price={product.price}
          selected={selectedProducts
            .map((p: ProductType) => p.id)
            .includes(product.id)}
          onClick={() => handleOnSelectorItemClick(product)}
        />
      ))}
      <ProductConfiguratorBasket
        selectedProducts={selectedProducts}
        onRemoveFromBasket={handleRemoveFromBasket}
      />
    </Wrapper>
  );
};

export default ProductSelector;
