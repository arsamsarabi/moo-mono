import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import type { WithTheme } from '../types';
import { defaultTheme } from '../theme';

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

const disabledStyles = css`
  pointer-events: none;
  background-color: ${rgba(defaultTheme.palette.common.black, 0.5)};
  color: ${rgba(defaultTheme.palette.common.white, 0.5)};
  border-color: ${rgba(defaultTheme.palette.common.white, 0.5)};
`;
export interface ButtonProps extends WithTheme {
  color?: string;
  inverse?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>(
  ({
    theme: { palette, measurements },
    color = palette.brand,
    inverse = false,
    disabled = false,
  }) => {
    return css`
      ${reset};
      border: 1px solid ${color};
      padding: ${measurements.xsmall};
      color: ${color};
      border-radius: 4px;
      transition: 0.2s all linear;
      background-color: transparent;
      text-align: center;

      &:hover {
        cursor: pointer;
        background-color: ${inverse ? rgba(color, 0.25) : rgba(color, 0.85)};
        color: ${inverse ? color : palette.common.white};
      }

      ${disabled ? disabledStyles : ''}
    `;
  },
);

export default Button;
