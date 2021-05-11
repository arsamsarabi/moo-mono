import { PaletteOptions } from '@material-ui/core/styles/createPalette';

export type HSL = {
  h: number;
  s: number;
  l: number;
};

export type ColorsType = {
  [key in string]: HSL;
};

export type MeasurementsType = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
};

export type TypographyType = {
  fontFamily: string;
  fontSize: number;
};

export type ThemeType = {
  colors: ColorsType;
  palette: PaletteOptions;
  measurements: MeasurementsType;
  typography: TypographyType;
};

export type WithTheme = {
  theme: ThemeType;
};
