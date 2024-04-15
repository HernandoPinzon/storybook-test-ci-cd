import React, { useState } from 'react';
import './styles.css';
import classNAmes from 'classnames';

interface CheckboxProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  type?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Checkbox = ({
  initialChecked = false,
  onChange,
  type = 'primary',
  children
}: CheckboxProps) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const className = classNAmes('checkbox', {
    [`type-${type}`]: type,
  });

  return (
    <label className="checkbox-container">
      {children}
      <input onChange={handleChange} type="checkbox" checked={checked} />
      <span className="checkmark"></span>
    </label>
  );
};
