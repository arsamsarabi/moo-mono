import React, { FC, useState } from 'react';

import type { ProductType } from '../types';
import ProductSelectorItem from '../ProductSelectorItem/ProductSelectorItem';
import ProductConfigurator from '../ProductConfigurator/ProductConfigurator';
import Button from '../Button/Button';
import { NoticeContainer } from './styles';

export interface ProductSelectorProps {
  products: ProductType[];
  productTypeLabel: string;
}

const ProductSelector: FC<ProductSelectorProps> = ({
  productTypeLabel,
  products,
}) => {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);

  const handleOnSelectorItemClick = (productId: string) => {
    const isSelected: boolean = selectedProductIds.includes(productId);
    if (isSelected) {
      setSelectedProductIds(
        selectedProductIds.filter((id) => id !== productId),
      );
    } else {
      setSelectedProductIds([...selectedProductIds, productId]);
    }
  };

  return (
    <>
      <NoticeContainer>
        <p>
          {'You can '}
          <Button>Create your own</Button>
          {` ${productTypeLabel}`} or select from the list of our pre configured
          {` ${productTypeLabel}`}
        </p>
      </NoticeContainer>
      {products.map((product: ProductType) => (
        <ProductSelectorItem
          key={product.id}
          description={product['item-description']}
          price={product.price}
          selected={selectedProductIds.includes(product.id)}
          onClick={() => handleOnSelectorItemClick(product.id)}
        />
      ))}
    </>
  );
};

export default ProductSelector;
