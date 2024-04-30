import React from 'react'
import { Checkbox, Tag } from '../../atoms'
import './styles.css'

interface TodoListItemProps {
  id: string
  text: string
  onToggle: () => void
  tags?: string[]
}

export const TodoListItem = ({
  id,
  onToggle,
  text,
  tags,
}: TodoListItemProps) => {
  return (
    <label className="todo-list-item" htmlFor={id}>
      <Checkbox onChange={onToggle} id={id}>
        {text}
      </Checkbox>
      <div className="todo-list-item--tags">
        {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </label>
  )
}
