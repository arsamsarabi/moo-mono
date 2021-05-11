import React, { FC } from 'react';

import { Wrapper, Title } from './styles';
import type { CoverColourAttribute } from '../types';
import RadioAndLabel from '../RadioAndLabel/RadioAndLabel';

export interface CoverColorSelectorProps {
  colors: CoverColourAttribute[];
  selectedColor: string;
  onChange(colorId: string): void;
}

const CoverColorSelector: FC<CoverColorSelectorProps> = ({
  colors,
  selectedColor,
  onChange,
}) => {
  return (
    <Wrapper>
      <Title>Cover color:</Title>
      {colors.map((cc: CoverColourAttribute) => (
        <div key={cc.id}>
          <RadioAndLabel
            label={cc.label}
            name="color"
            value={cc.id}
            selected={cc.id === selectedColor}
            onChange={onChange}
          />
        </div>
      ))}
    </Wrapper>
  );
};

export default CoverColorSelector;
