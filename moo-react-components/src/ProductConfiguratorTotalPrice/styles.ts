import styled, { css } from 'styled-components';
import { hsl } from 'polished';

import type { WithTheme } from '../types';
import { colors } from '../theme';

const { white } = colors;

export const TOTAL_PRICE_HEIGHT = 48;

export const Wrapper = styled.div<WithTheme>(
  ({ theme: { palette, measurements } }) => {
    return css`
      width: 100%;
      height: ${TOTAL_PRICE_HEIGHT}px;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: ${palette.brand};
      padding: ${measurements.small};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & > p {
        color: ${hsl(white.h, white.s, white.l)};
        &:first-of-type {
          margin-right: ${measurements.small};
        }
      }

      & > button {
        margin-left: auto;
      }
    `;
  },
);
