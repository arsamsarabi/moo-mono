import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { hsl } from 'polished';

import type { ColorsType } from '../types';

export const colors: ColorsType = {
  green: { h: 164, s: 1, l: 0.3 },
  blue: { h: 208, s: 0.44, l: 0.6 },
  red: { h: 15, s: 0.51, l: 0.59 },
  yellow: { h: 43, s: 0.89, l: 0.56 },
  grey: { h: 199, s: 0.15, l: 0.63 },
  black: { h: 193, s: 0.9, l: 0.19 },
  white: { h: 228, s: 0.33, l: 0.97 },
};

const { green, blue, red, yellow, grey } = colors;

export const palette: PaletteOptions = {
  primary: {
    main: hsl(green.h, green.s, green.l),
  },
  secondary: {
    main: hsl(blue.h, blue.s, blue.l),
  },
  error: {
    main: hsl(red.h, red.s, red.l),
  },
  warning: {
    main: hsl(yellow.h, yellow.s, yellow.l),
  },
  info: {
    main: hsl(grey.h, grey.s, grey.l),
  },
  success: {
    main: hsl(green.h, green.s, green.l),
  },
};
