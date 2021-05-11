import React, { FC } from 'react';

import { Wrapper, Title } from './styles';
import type { PaperTypeAttribute } from '../types';

interface PaperTypeSelectorProps {
  paperTypes?: PaperTypeAttribute[];
  selectedType: string;
  onChange(colorId: string): void;
}

const PaperTypeSelector: FC<PaperTypeSelectorProps> = ({
  paperTypes,
  selectedType,
  onChange,
}) => {
  return (
    <Wrapper>
      <Title>Paper type:</Title>
      {paperTypes.map((pt: PaperTypeAttribute) => (
        <div key={pt.id}>
          <label>
            <input
              type="radio"
              id={pt.id}
              name="paper type"
              value={pt.id}
              checked={pt.id === selectedType}
              onChange={() => onChange(pt.id)}
            />
            {pt.label}
          </label>
        </div>
      ))}
    </Wrapper>
  );
};

export default PaperTypeSelector;
