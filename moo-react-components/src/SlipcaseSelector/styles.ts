import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    margin: ${measurements.small} 0;
  `;
});
