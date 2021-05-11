import React, { FC } from 'react';

import { Label, Input } from './styles';

interface CheckboxAndLabelProps {
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
      />
      {label}
    </Label>
  );
};

export default CheckboxAndLabel;
