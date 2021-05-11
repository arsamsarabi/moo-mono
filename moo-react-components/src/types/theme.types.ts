export type HSL = {
  h: number;
  s: number;
  l: number;
};

export type ColorsType = {
  [key in string]: HSL;
};

export type PaletteType = {
  brand: string;
  cool: string;
  hot: string;
  warm: string;
  neutral: string;
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
  palette: PaletteType;
  measurements: MeasurementsType;
  typography: TypographyType;
};

export type WithTheme = {
  theme: ThemeType;
};
