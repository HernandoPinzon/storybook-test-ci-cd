import classNames from 'classnames';
import './styles.css';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  shape?: 'rounded' | 'square';
  uppercase?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'primary',
  shape = 'rounded',
  uppercase,
  onClick,
}: ButtonProps) => {
  const className = classNames('button', {
    [`type-${type}`]: type,
    [`button-shape-${shape}`]: shape,
    uppercase: uppercase,
  });
  return <button onClick={onClick} className={className}>{children}</button>;
};
