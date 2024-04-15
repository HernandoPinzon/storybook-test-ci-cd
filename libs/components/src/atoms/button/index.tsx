import classNames from 'classnames';
import './styles.css';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  uppercase?: boolean;
}

export const Button = (props: ButtonProps) => {
  const className = classNames('button', {
    [`type-${props.type}`]: props.type,
    uppercase: props.uppercase,
  });
  return <button className={className}>{props.children}</button>;
};
