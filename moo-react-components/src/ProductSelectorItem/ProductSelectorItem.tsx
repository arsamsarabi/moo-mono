import React, { FC } from 'react';

import { Wrapper, Icon, DescriptionText } from './styles';

export interface ProductSelectorItemProps {
  description: string;
  price: number;
  selected: boolean;
  onClick(): void;
  id?: string;
}

const ProductSelectorItem: FC<ProductSelectorItemProps> = ({
  description,
  price,
  selected,
  onClick,
  id,
}) => {
  return (
    <Wrapper
      selected={selected}
      onClick={onClick}
      role="button"
      aria-pressed={selected}
      data-testid={`selector-item-${id}`}
    >
      {/*
        NOTE: 
          I recommend using a react icons component library or SVG
          icons for the icons below and through out the application
      */}
      <Icon selected={selected}>{selected ? '−' : '+'}</Icon>
      <DescriptionText>{description}</DescriptionText>
      <DescriptionText>£{price.toFixed(2)}</DescriptionText>
    </Wrapper>
  );
};

export default ProductSelectorItem;
