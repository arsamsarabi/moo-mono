import React, { FC, useEffect, useState } from 'react';

import type {
  PaperTypeAttribute,
  CoverColourAttribute,
  CustomProductType,
} from '../types';
import CoverColorSelector from '../CoverColorSelector/CoverColorSelector';
import PaperTypeSelector from '../PaperTypeSelector/PaperTypeSelector';
import SlipcaseSelector from '../SlipcaseSelector/SlipcaseSelector';
import Button from '../Button/Button';
import {
  Wrapper,
  Title,
  Footer,
  ActionsWrapper,
  CoverColorText,
  PaperTypeText,
  ProductDescriptionText,
} from './styles';
import { defaultTheme } from '../theme';

export interface ProductConfiguratorProps {
  productName: string;
  paperTypes?: PaperTypeAttribute[];
  colors?: CoverColourAttribute[];
  handleAddToBasket(customProduct: CustomProductType): void;
  handleDiscard(): void;
}

const DEFAULT_PAPER_TYPES: PaperTypeAttribute[] = [
  {
    id: 'pt1',
    type: 'paper-type',
    value: 'dotted',
    label: 'Dotted paper',
  },
  {
    id: 'pt2',
    type: 'paper-type',
    value: 'lined',
    label: 'Lined paper',
  },
];

const DEFAULT_COLORS: CoverColourAttribute[] = [
  {
    id: 'cc1',
    type: 'cover-colour',
    value: 'red',
    label: 'Sunset',
  },
  {
    id: 'cc2',
    type: 'cover-colour',
    value: 'blue',
    label: 'Ocean',
  },
  {
    id: 'cc3',
    type: 'cover-colour',
    value: 'green',
    label: 'Mint',
  },
  {
    id: 'cc4',
    type: 'cover-colour',
    value: 'yellow',
    label: 'Sunny day',
  },
  {
    id: 'cc5',
    type: 'cover-colour',
    value: 'black',
    label: 'Dark night',
  },
];

// NOTE: receive below price related values through props/ context etc. from API/ Config
// TODO: Implement price change logic based on selected values if price differs
const BASE_PRICE = 14.99;
const COLOR_PRICE = 0.99;
const PAPER_TYPE_PRICE = 0.99;
const SLIPCASE_PRICE = 3.99;

const ProductConfigurator: FC<ProductConfiguratorProps> = ({
  paperTypes = DEFAULT_PAPER_TYPES,
  colors = DEFAULT_COLORS,
  productName,
  handleAddToBasket,
  handleDiscard,
}) => {
  const [coverColor, setCoverColor] = useState(colors[0].id);
  const [selectedPaperType, setSelectedPaperType] = useState(paperTypes[0].id);
  const [slipcase, setSlipcase] = useState(false);
  const [price, setPrice] = useState(0);

  const onDiscard = () => {
    handleDiscard();
  };

  const updatePrice = (checked = slipcase) => {
    const newPrice =
      Math.round(
        (BASE_PRICE +
          COLOR_PRICE +
          PAPER_TYPE_PRICE +
          (checked ? SLIPCASE_PRICE : 0)) *
          100,
      ) / 100;

    setPrice(newPrice);
  };

  const handleOnColorSelect = (colorId: string) => {
    setCoverColor(colorId);
    updatePrice();
  };

  const handleOnPaperTypeSelect = (paperTypeId: string) => {
    setSelectedPaperType(paperTypeId);
    updatePrice();
  };

  const handleOnSlipcaseSelect = (checked: boolean) => {
    setSlipcase(checked);
    updatePrice(checked);
  };

  const onAddToBasket = () => {
    const customProductDescription = `${
      selectedColorObject.label
    } ${productName} with ${selectedPaperTypeObject.label} and ${
      slipcase ? 'Slipcase' : 'no Slipcase'
    }`;
    const customProduct: CustomProductType = {
      id: `${Math.floor(Math.random() * 90) + 10}-${new Date().toISOString()}`,
      'product-group-label': productName,
      'item-description': customProductDescription,
      attributes: [
        {
          type: 'paper-type',
          value: selectedPaperTypeObject.value,
          label: selectedPaperTypeObject.label,
        },
        {
          type: 'cover-colour',
          value: selectedColorObject.value,
          label: selectedColorObject.label,
        },
      ],
      price,
    };
    handleAddToBasket(customProduct);
  };

  useEffect(() => {
    updatePrice();
  }, []);

  const selectedColorObject: CoverColourAttribute = colors.find(
    (cl: CoverColourAttribute) => cl.id === coverColor,
  );

  const selectedPaperTypeObject: PaperTypeAttribute = paperTypes.find(
    (pt: PaperTypeAttribute) => pt.id === selectedPaperType,
  );

  return (
    <Wrapper>
      <Title>Customize your {productName}</Title>
      <CoverColorSelector
        colors={colors}
        selectedColor={coverColor}
        onChange={handleOnColorSelect}
      />
      <PaperTypeSelector
        paperTypes={paperTypes}
        selectedType={selectedPaperType}
        onChange={handleOnPaperTypeSelect}
      />
      <SlipcaseSelector selected={slipcase} onChange={handleOnSlipcaseSelect} />

      <Footer>
        <ProductDescriptionText>
          You have selected a
          <CoverColorText color={selectedColorObject.value}>
            {selectedColorObject.label}
          </CoverColorText>
          {productName} with
          <PaperTypeText paperType={selectedPaperTypeObject.value}>
            {selectedPaperTypeObject.label}
          </PaperTypeText>
          and <strong>{slipcase ? 'Slipcase' : 'no Slipcase'}</strong>
        </ProductDescriptionText>
        <p>Price: £{price.toFixed(2)}</p>
        <ActionsWrapper>
          <Button onClick={onAddToBasket}>Add to basket</Button>
          <Button onClick={onDiscard} color={defaultTheme.palette.hot}>
            Discard
          </Button>
        </ActionsWrapper>
      </Footer>
    </Wrapper>
  );
};

export default ProductConfigurator;
