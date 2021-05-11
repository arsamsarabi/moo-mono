import React, { FC } from 'react';

import { Label, Input } from './styles';

export interface RadioAndLabelProps {
  label: string;
  name: string;
  value: string;
  selected: boolean;
  onChange(id: string): void;
}

const RadioAndLabel: FC<RadioAndLabelProps> = ({
  label,
  name,
  value,
  selected,
  onChange,
}) => {
  return (
    <Label data-testid="radio-input-label">
      <Input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
      />
      <span data-testid="radio-label-text">{label}</span>
    </Label>
  );
};

export default RadioAndLabel;
