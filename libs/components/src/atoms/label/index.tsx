import classNames from 'classnames';
import './styles.css';
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large'; 
}

export const Label = (props: LabelProps) => {
  const className = classNames('label', {
    [`size-${props.size}`]: props.size,
  });
  return <span className={className}>{props.children}</span>;
};
