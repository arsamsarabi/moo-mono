import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { TOTAL_PRICE_HEIGHT } from '../ProductConfiguratorBasket/styles';
import { devices } from '../theme';

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    padding-bottom: calc(${TOTAL_PRICE_HEIGHT}px + ${measurements.small});

    @media ${devices.largeMobile} {
      padding: ${measurements.medium};
      padding-bottom: calc(${TOTAL_PRICE_HEIGHT}px + ${measurements.medium});
    }
  `;
});

export const AlertWraper = styled.div<WithTheme>(
  ({ theme: { measurements, palette } }) => {
    return css`
      background-color: ${palette.brand};
      padding: ${measurements.small};
      margin: ${measurements.small} 0;
      border-radius: 4px;

      @media ${devices.largeMobile} {
        margin: ${measurements.medium} 0;
      }
    `;
  },
);

export const ConfirmationAlert = styled.p<WithTheme>(
  ({ theme: { palette } }) => {
    return css`
      color: ${palette.common.white};
    `;
  },
);
