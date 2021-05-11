import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';
interface WrapperProps extends WithTheme {
  selected: boolean;
}

export const Wrapper = styled.div<WrapperProps>(({ theme, selected }) => {
  const { palette, measurements } = theme;

  return css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 52px;
    border: 2px solid ${selected ? palette.brand : palette.neutral};
    border-radius: 4px;
    padding: ${measurements.small};
    margin: ${measurements.small} 0;

    @media ${devices.largeMobile} {
      margin: ${measurements.medium} 0;
    }

    &:hover {
      cursor: pointer;
    }

    & > p:first-of-type {
      margin-right: ${measurements.small};
    }
    & > p:last-of-type {
      margin-left: auto;
      margin-right: 0;
    }
  `;
});

interface IconProps extends WithTheme {
  selected: boolean;
}

export const Icon = styled.p<IconProps>(({ theme, selected }) => {
  const { palette, measurements } = theme;

  return css`
    margin: -${measurements.xsmall} ${measurements.small} 0 0;
    font-size: 32px;
    color: ${selected ? palette.hot : palette.brand};
    line-height: 1;
  `;
});

export const DescriptionText = styled.p<WithTheme>(
  ({ theme: { measurements } }) => {
    return css`
      font-size: 14px;
      @media ${devices.largeMobile} {
        font-size: 16px;
        margin-right: ${measurements.small};
      }
    `;
  },
);
