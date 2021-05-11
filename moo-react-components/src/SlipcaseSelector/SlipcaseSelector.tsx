import React, { FC } from 'react';

import CheckboxAndLabel from '../CheckboxAndLabel/CheckboxAndLabel';
import { Wrapper } from './styles';

export interface SlipcaseSelectorProps {
  selected: boolean;
  onChange(value: boolean): void;
}

const SlipcaseSelector: FC<SlipcaseSelectorProps> = ({
  selected,
  onChange,
}) => {
  return (
    <Wrapper>
      <CheckboxAndLabel
        name="slipcase"
        checked={selected}
        onChange={onChange}
        label="Do you need Slipcase?"
      />
    </Wrapper>
  );
};

export default SlipcaseSelector;
