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
    <Label>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
      />
      {label}
    </Label>
  );
};

export default RadioAndLabel;
