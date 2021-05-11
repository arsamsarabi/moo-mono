import { createGlobalStyle, css } from 'styled-components';
import { hsl } from 'polished';

import type { WithTheme } from '../types';
import { resetCss } from './resetCss';
import { colors } from './palette';

const { black, white } = colors;

export const GlobalStyles = createGlobalStyle(
  ({ theme: { typography } }: WithTheme) => {
    return css`
      ${resetCss}

      body {
        margin: 0;
        padding: 0;
        font-family: ${typography.fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${hsl(black.h, black.s, black.l)};
        background-color: ${hsl(white.h, white.s, white.l)};
        font-size: ${typography.fontSize};
      }
    `;
  },
);
