import React, { FC } from 'react';

import { Wrapper, Title } from './styles';
import type { CoverColourAttribute } from '../types';

interface CoverColorSelectorProps {
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
          <label>
            <input
              type="radio"
              id={cc.id}
              name="color"
              value={cc.id}
              checked={cc.id === selectedColor}
              onChange={() => onChange(cc.id)}
            />
            {cc.label}
          </label>
        </div>
      ))}
    </Wrapper>
  );
};

export default CoverColorSelector;
