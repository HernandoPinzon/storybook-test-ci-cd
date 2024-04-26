import React from 'react';
import './styles.css';

interface TextAreaProps {
  id: string;
  rows?: number;
  placeholder?: string;
  onChangeValue: (value: string) => void;
  value?: string;
}

export const TextArea = ({
  id,
  rows = 4,
  placeholder = 'Write something here...',
  onChangeValue,
  value
}: TextAreaProps) => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChangeValue(event.target.value);
  return (
    <textarea
    value={value}
      onChange={onChange}
      id={id}
      className="textarea"
      rows={rows}
      placeholder={placeholder}
    />
  );
};
