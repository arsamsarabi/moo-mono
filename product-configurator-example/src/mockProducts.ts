import type { ProductType } from 'moo-react-components'

export const mockProducts: ProductType[] = [
  {
    id: '1',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Sunset notebook with dotted paper',
    attributes: [
      {
        id: 'cc1',
        type: 'cover-colour',
        value: 'red',
        label: 'Sunset',
      },
      {
        id: 'pt1',
        type: 'paper-type',
        value: 'dotted',
        label: 'Dotted paper',
      },
      {
        id: 'sc1',
        type: 'slip-case-included',
        value: false,
        label: 'Slipcase',
      },
    ],
    price: 17,
  },
  {
    id: '2',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Ocean notebook with dotted paper',
    attributes: [
      {
        id: 'cc2',
        type: 'cover-colour',
        value: 'blue',
        label: 'Ocean',
      },
      {
        id: 'pt1',
        type: 'paper-type',
        value: 'dotted',
        label: 'Dotted paper',
      },
      {
        id: 'sc1',
        type: 'slip-case-included',
        value: false,
        label: 'Slipcase',
      },
    ],
    price: 18,
  },
  {
    id: '3',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Sunset notebook with dotted paper and Slipcase',
    attributes: [
      {
        id: 'cc1',
        type: 'cover-colour',
        value: 'red',
        label: 'Sunset',
      },
      {
        id: 'pt1',
        type: 'paper-type',
        value: 'dotted',
        label: 'Dotted paper',
      },
      {
        id: 'sc2',
        type: 'slip-case-included',
        value: true,
        label: 'Slipcase',
      },
    ],
    price: 21.99,
  },
  {
    id: '4',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Ocean notebook with dotted paper and Slipcase',
    attributes: [
      {
        id: 'cc2',
        type: 'cover-colour',
        value: 'blue',
        label: 'Ocean',
      },
      {
        id: 'pt1',
        type: 'paper-type',
        value: 'dotted',
        label: 'Dotted paper',
      },
      {
        id: 'sc2',
        type: 'slip-case-included',
        value: true,
        label: 'Slipcase',
      },
    ],
    price: 19.99,
  },
  {
    id: '5',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Sunset notebook with lined paper',
    attributes: [
      {
        id: 'cc1',
        type: 'cover-colour',
        value: 'red',
        label: 'Sunset',
      },
      {
        id: 'pt2',
        type: 'paper-type',
        value: 'lined',
        label: 'Lined paper',
      },
      {
        id: 'sc1',
        type: 'slip-case-included',
        value: false,
        label: 'Slipcase',
      },
    ],
    price: 15,
  },
  {
    id: '6',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Ocean notebook with lined paper',
    attributes: [
      {
        id: 'cc2',
        type: 'cover-colour',
        value: 'blue',
        label: 'Ocean',
      },
      {
        id: 'pt2',
        type: 'paper-type',
        value: 'lined',
        label: 'Lined paper',
      },
      {
        id: 'sc1',
        type: 'slip-case-included',
        value: false,
        label: 'Slipcase',
      },
    ],
    price: 17,
  },
  {
    id: '7',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Sunset notebook with lined paper and Slipcase',
    attributes: [
      {
        id: 'cc1',
        type: 'cover-colour',
        value: 'red',
        label: 'Sunset',
      },
      {
        id: 'pt2',
        type: 'paper-type',
        value: 'lined',
        label: 'Lined paper',
      },
      {
        id: 'sc2',
        type: 'slip-case-included',
        value: true,
        label: 'Slipcase',
      },
    ],
    price: 15,
  },
  {
    id: '8',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Ocean notebook with lined paper and Slipcase',
    attributes: [
      {
        id: 'cc2',
        type: 'cover-colour',
        value: 'blue',
        label: 'Ocean',
      },
      {
        id: 'pt2',
        type: 'paper-type',
        value: 'lined',
        label: 'Lined paper',
      },
      {
        id: 'sc2',
        type: 'slip-case-included',
        value: true,
        label: 'Slipcase',
      },
    ],
    price: 18.99,
  },
]
