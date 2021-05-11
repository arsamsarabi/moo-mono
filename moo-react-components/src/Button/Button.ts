import styled, { css } from 'styled-components';
import { rgba, hsl } from 'polished';

import type { WithTheme } from '../types';
import { colors } from '../theme';

const { white } = colors;

export interface ButtonProps extends WithTheme {
  color?: string;
}

const reset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  outline: none;
  background: transparent;
  text-align: inherit;
  border-radius: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
`;

const Button = styled.button<ButtonProps>(
  ({ theme: { palette, measurements }, color = palette.primary.main }) => {
    return css`
      ${reset};
      border: 1px solid ${color};
      padding: ${measurements.xsmall};
      color: ${color};
      border-radius: 4px;
      transition: 0.2s all linear;

      &:hover {
        cursor: pointer;
        background-color: ${rgba(color, 0.75)};
        color: ${hsl(white.h, white.s, white.l)};
      }
    `;
  },
);

export default Button;
