import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const TOTAL_PRICE_HEIGHT = 48;

interface WrapperProps extends WithTheme {
  fullPage: boolean;
}

export const Wrapper = styled.div<WrapperProps>(
  ({ theme: { palette, measurements }, fullPage }) => {
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
      transition: 0.2s all linear;

      ${fullPage &&
      css`
        height: 100%;
        align-items: flex-start;
        background-color: ${palette.common.white};
      `}

      @media ${devices.largeMobile} {
        padding: ${measurements.medium};
      }

      & > p {
        color: ${palette.common.white};

        ${fullPage &&
        css`
          color: ${palette.brand};
        `}

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
