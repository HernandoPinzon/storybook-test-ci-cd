import React, { useState } from 'react';
import './styles.css';
import classNAmes from 'classnames';

interface CheckboxProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  type?: 'rounded' | 'square';
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right';
}

export const Checkbox = ({
  initialChecked = false,
  onChange,
  type = 'square',
  size = 'medium',
  position = 'left',
  children
}: CheckboxProps) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const classNameCheckMark = classNAmes('checkmark', {
    [`checkmark-type-${type}`]: type,
    [`checkmark-size-${size}`]: size,
  });

  const classNameContainer = classNAmes('checkbox-container', {
    [`checkbox-position-${position}`]: position
  });

  return (
    <label className={classNameContainer}>
      {children}
      <input onChange={handleChange} type="checkbox" checked={checked} hidden/>
      <div className={classNameCheckMark}></div>
    </label>
  );
};
