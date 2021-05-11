import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled.input<WithTheme>(({ theme: { measurements } }) => {
  return css`
    margin-right: ${measurements.small};
  `;
});
