import React, { FC } from 'react';

import { Label, Input } from './styles';

export interface CheckboxAndLabelProps {
  name: string;
  checked: boolean;
  onChange(checked: boolean): void;
  label: string;
}

const CheckboxAndLabel: FC<CheckboxAndLabelProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <Label>
      <Input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.checked);
        }}
        data-testid="checkbox-input"
      />
      <span data-testid="label-text">{label}</span>
    </Label>
  );
};

export default CheckboxAndLabel;
