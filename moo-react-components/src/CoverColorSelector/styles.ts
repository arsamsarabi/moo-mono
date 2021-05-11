import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    margin-bottom: ${measurements.small};
    @media ${devices.largeMobile} {
      margin-bottom: ${measurements.medium};
    }
  `;
});

export const Title = styled.h2<WithTheme>(({ theme: { measurements } }) => {
  return css`
    font-size: 14px;
    margin-bottom: ${measurements.xsmall};
  `;
});
