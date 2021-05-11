import React, { FC } from 'react';

import { Wrapper, Title } from './styles';
import type { PaperTypeAttribute } from '../types';
import RadioAndLabel from '../RadioAndLabel/RadioAndLabel';

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
          <RadioAndLabel
            label={pt.label}
            name="paper type"
            value={pt.id}
            selected={pt.id === selectedType}
            onChange={onChange}
          />
        </div>
      ))}
    </Wrapper>
  );
};

export default PaperTypeSelector;
