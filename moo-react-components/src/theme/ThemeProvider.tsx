import React, { FC, ReactElement } from 'react';
import {
  ThemeProvider as MUIThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import type { ThemeType } from '../types';
import { theme as defaultTheme } from './theme';

interface ThemeProviderProps {
  children: ReactElement;
  theme?: ThemeType;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const mergedTheme: ThemeType = merge(defaultTheme, theme);

  const muiTtheme = createMuiTheme({
    ...mergedTheme,
  });

  return (
    <MUIThemeProvider theme={muiTtheme}>
      <SCThemeProvider theme={mergedTheme}>
        <CssBaseline />
        {children}
      </SCThemeProvider>
    </MUIThemeProvider>
  );
};
