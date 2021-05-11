import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const Label = styled.label<WithTheme>(({ theme: { measurements } }) => {
  return css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media ${devices.largeMobile} {
    }
  `;
});

export const Input = styled.input<WithTheme>(({ theme: { measurements } }) => {
  return css`
    margin-right: ${measurements.small};
  `;
});
