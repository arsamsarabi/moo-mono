import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { getColourStringFromHSL } from './helpers';
import type { ColorsType } from '../types';

export const colors: ColorsType = {
  green: { h: 164, s: 100, l: 30 },
  blue: { h: 208, s: 44, l: 60 },
  red: { h: 15, s: 51, l: 59 },
  yellow: { h: 43, s: 89, l: 56 },
  grey: { h: 199, s: 15, l: 63 },
  black: { h: 193, s: 9, l: 19 },
  white: { h: 228, s: 33, l: 97 },
};

export const palette: PaletteOptions = {
  primary: {
    main: getColourStringFromHSL(colors.green),
  },
  secondary: {
    main: getColourStringFromHSL(colors.blue),
  },
  error: {
    main: getColourStringFromHSL(colors.red),
  },
  warning: {
    main: getColourStringFromHSL(colors.yellow),
  },
  info: {
    main: getColourStringFromHSL(colors.grey),
  },
  success: {
    main: getColourStringFromHSL(colors.green),
  },
};
