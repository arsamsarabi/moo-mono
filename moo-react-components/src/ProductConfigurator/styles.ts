import styled, { css } from 'styled-components';

import type { WithTheme } from '../types';
import { devices } from '../theme';

export const Wrapper = styled.div<WithTheme>(
  ({ theme: { measurements, palette } }) => {
    return css`
      border: 1px solid ${palette.brand};
      padding: ${measurements.small};
      margin: ${measurements.medium} 0;
      border-radius: 4px;

      @media ${devices.largeMobile} {
        padding: ${measurements.medium};
      }
    `;
  },
);

export const Title = styled.h1<WithTheme>(({ theme: { measurements } }) => {
  return css`
    font-size: 14px;
    margin-bottom: ${measurements.small};
    @media ${devices.largeMobile} {
      margin-bottom: ${measurements.medium};
    }
  `;
});

export const Footer = styled.div<WithTheme>(
  ({ theme: { measurements, palette } }) => {
    return css`
      flex: 1;
      border-top: 1px solid ${palette.brand};
      margin-top: ${measurements.medium};
      padding-top: ${measurements.small};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      & > p {
        margin-right: auto;
      }
    `;
  },
);

export const ActionsWrapper = styled.div<WithTheme>(
  ({ theme: { measurements } }) => {
    return css`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin-top: ${measurements.small};

      & > button {
        &:first-of-type {
          margin-right: ${measurements.small};
          @media ${devices.largeMobile} {
            margin-right: ${measurements.medium};
          }
        }
      }
    `;
  },
);

interface CoverColorTextProps extends WithTheme {
  color: string;
}

export const CoverColorText = styled.span<CoverColorTextProps>(
  ({ theme: { palette }, color }) => {
    const colorMap = {
      red: palette.hot,
      green: palette.brand,
      yellow: palette.warm,
      blue: palette.cool,
      black: palette.common.black,
    };
    return css`
      color: ${colorMap[color]};
      font-weight: bold;
    `;
  },
);

interface PaperTypeTextProps extends WithTheme {
  paperType: string;
}

export const PaperTypeText = styled.span<PaperTypeTextProps>(
  ({ theme: { palette }, paperType }) => {
    const borderStyle = paperType === 'lined' ? 'solid' : paperType;
    return css`
      border-bottom: 2px ${borderStyle} ${palette.common.black};
      font-weight: bold;
    `;
  },
);

export const ProductDescriptionText = styled.p<WithTheme>(
  ({ theme: { measurements } }) => {
    return css`
      margin: ${measurements.small} 0;
      & > span {
        margin: 0 ${measurements.xsmall};
      }
    `;
  },
);
