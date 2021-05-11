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

type CoverColours = CoverColourRed | CoverColourBlue;

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

type CoverColourAttribute = BaseAttribute & CoverColours;

type PaperTypeAttribute = BaseAttribute & PaperTypes;

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
