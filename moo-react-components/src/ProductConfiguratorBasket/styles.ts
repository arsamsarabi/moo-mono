import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const TOTAL_PRICE_HEIGHT = 48;

interface WrapperProps extends WithTheme {
  fullPage: boolean;
}

export const Wrapper = styled.div<WrapperProps>(
  ({ theme: { palette }, fullPage }) => {
    return css`
      width: 100%;
      height: ${TOTAL_PRICE_HEIGHT}px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${palette.brand};
      transition: 0.2s all linear;
      overflow-y: auto;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;

      ${fullPage &&
      css`
        height: 100%;
        align-items: flex-start;
        background-color: ${palette.common.white};
      `}
    `;
  },
);

export const Header = styled.div<WrapperProps>(
  ({ theme: { measurements }, fullPage }) => {
    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: ${TOTAL_PRICE_HEIGHT}px;
      padding: ${measurements.small};

      @media ${devices.largeMobile} {
        padding: ${measurements.medium};
      }

      ${fullPage &&
      css`
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-items: center;

        @media ${devices.tablet} {
          flex-direction: row;
        }
      `}
    `;
  },
);

export const TotalPriceWrapper = styled.div<WrapperProps>(
  ({ theme: { palette, measurements }, fullPage }) => {
    return css`
      display: flex;

      ${fullPage &&
      css`
        @media ${devices.tablet} {
          flex: 1;
        }
      `}

      & > p {
        color: ${palette.common.white};
        &:first-of-type {
          margin-right: ${measurements.small};
        }
        ${fullPage &&
        css`
          color: ${palette.common.black};
        `}
      }
    `;
  },
);

export const ActionsWrapper = styled.div<WrapperProps>(
  ({ theme: { measurements }, fullPage }) => {
    return css`
      display: flex;
      ${fullPage &&
      css`
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-items: center;
        margin-top: ${measurements.small};
        width: 100%;

        @media ${devices.tablet} {
          width: auto;
          flex-direction: row;
          margin-top: 0;
        }

        & > button {
          width: 100%;

          &:first-of-type {
            margin-bottom: ${measurements.small};
          }

          @media ${devices.tablet} {
            width: initial;
          }
          @media ${devices.tablet} {
            &:first-of-type {
              margin-bottom: 0;
              margin-right: ${measurements.small};
            }
          }
        }
      `}
    `;
  },
);

export const BasketItemsWrapper = styled.div<WithTheme>(
  ({ theme: { measurements } }) => {
    return css`
      padding: ${measurements.small};

      @media ${devices.largeMobile} {
        padding: ${measurements.medium};
      }
    `;
  },
);
