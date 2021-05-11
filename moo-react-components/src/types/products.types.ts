/* ------------------------------------------------
||  PRODUCT GROUPS
------------------------------------------------ */
type ProductGroupIDs = 'hardcover-notebook'; // NOTE: Append future product IDs here

/* ------------------------------------------------
||  PRODUCT ATTRIBUTES
------------------------------------------------ */
type AttributeTypes = 'cover-colour' | 'paper-type' | 'slip-case-included';

// COVER COLOURS
type CoverColourRed = {
  value: 'red';
  label: 'Sunset';
};

type CoverColourBlue = {
  value: 'blue';
  label: 'Ocean';
};

type CoverColourGreen = {
  value: 'green';
  label: 'Mint';
};

type CoverColourYellow = {
  value: 'yellow';
  label: 'Sunny day';
};

type CoverColourBlack = {
  value: 'black';
  label: 'Dark night';
};

type CoverColours =
  | CoverColourRed
  | CoverColourBlue
  | CoverColourGreen
  | CoverColourYellow
  | CoverColourBlack;

// PAPER TYPE
type DottedPaperType = {
  value: 'dotted';
  label: 'Dotted paper';
};

type LinedPaperType = {
  value: 'lined';
  label: 'Lined paper';
};

type PaperTypes = DottedPaperType | LinedPaperType;

// SLIP CASE
type SlipCaseType = {
  value: boolean;
  label: 'Slipcase';
};

// PRODUCT ATTRIBUTES
type BaseAttribute = {
  id: string;
  type: AttributeTypes;
};

export type CoverColourAttribute = BaseAttribute & CoverColours;

export type PaperTypeAttribute = BaseAttribute & PaperTypes;

type SlipCaseAttribute = BaseAttribute & SlipCaseType;

/* ------------------------------------------------
||  PRODUCT CONFIGURATOR
------------------------------------------------ */
export type ProductAttributes =
  | CoverColourAttribute
  | PaperTypeAttribute
  | SlipCaseAttribute;

export type ProductType = {
  id: string;
  'product-group-label': string;
  'product-group-id': ProductGroupIDs;
  'item-description': string;
  attributes: ProductAttributes[];
  price: number;
};

export type CustomProductType = {
  id: string;
  'product-group-label': string;
  'item-description': string;
  attributes: Omit<ProductAttributes, 'id'>[];
  price: number;
};

export type SelectedProduct = ProductType | CustomProductType;
