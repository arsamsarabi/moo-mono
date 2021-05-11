import React, { FC } from 'react';

import { Wrapper } from './styles';

interface SlipcaseSelectorProps {
  selected: boolean;
  onChange(value: boolean): void;
}

const SlipcaseSelector: FC<SlipcaseSelectorProps> = ({
  selected,
  onChange,
}) => {
  return (
    <Wrapper>
      <label>
        <input
          type="checkbox"
          name="slipcase"
          checked={selected}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.checked)
          }
        />
        Do you need Slipcase?
      </label>
    </Wrapper>
  );
};

export default SlipcaseSelector;
