import classNames from 'classnames';
import './styles.css';
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
}

export const Label = (props: LabelProps) => {
  const className = classNames('label', {
    [`size-${props.size}`]: props.size,
  });
  return <span className={className} style={props.style}>{props.children}</span>;
};
