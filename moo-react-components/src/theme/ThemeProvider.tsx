import React, { FC, ReactElement } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import type { ThemeType } from '../types';
import { theme as defaultTheme } from './theme';
import { GlobalStyles } from './globalStyles';

interface ThemeProviderProps {
  children: ReactElement;
  theme?: ThemeType;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const mergedTheme: ThemeType = merge(defaultTheme, theme);

  return (
    <SCThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      {children}
    </SCThemeProvider>
  );
};
