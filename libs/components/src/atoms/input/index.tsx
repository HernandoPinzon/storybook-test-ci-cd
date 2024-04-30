import React from 'react'
import './styles.css'

interface InputProps {
  id: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  onChangeValue: (value: string) => void
  value?: string
}

export const Input = ({
  id,
  placeholder = 'Write something here...',
  onChangeValue,
  type = 'text',
  value,
}: InputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChangeValue(event.target.value)

  return (
    <input
      onChange={onChange}
      type={type}
      id={id}
      value={value}
      className="input"
      placeholder={placeholder}
    />
  )
}
