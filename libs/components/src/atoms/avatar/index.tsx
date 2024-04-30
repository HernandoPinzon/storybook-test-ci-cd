import classNames from 'classnames'
import React from 'react'
import './styles.css'

interface AvatarProps {
  src: string
  size?: 'small' | 'medium' | 'large'
  alt: string
}

export const Avatar = ({ src, size, alt }: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames('avatar', {
        [`avatar-${size}`]: size,
      })}
    />
  )
}
