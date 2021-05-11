import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const Wrapper = styled.div<WithTheme>(
  ({ theme: { palette, measurements } }) => {
    return css`
      border-top: 1px dotted ${palette.cool};
      border-bottom: 1px dotted ${palette.cool};
      height: 96px;
      border-radius: 4px;
      margin: ${measurements.small} 0;
      padding: ${measurements.small};
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media ${devices.largeMobile} {
        padding: ${measurements.medium};
      }

      & > div {
        &:last-of-type {
          margin-top: ${measurements.small};
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    `;
  },
);
