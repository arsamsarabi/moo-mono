import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    margin: ${measurements.small} 0;

    @media ${devices.largeMobile} {
      margin: ${measurements.medium} 0;
    }
  `;
});
