import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    margin-bottom: ${measurements.small};
  `;
});

export const Title = styled.h2<WithTheme>(({ theme: { measurements } }) => {
  return css`
    font-size: 14px;
    margin-bottom: ${measurements.xsmall};
  `;
});
