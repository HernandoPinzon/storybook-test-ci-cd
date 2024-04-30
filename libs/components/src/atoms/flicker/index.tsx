import React from 'react'
import './styles.css'
import { Props } from 'next/script'

export const Flicker = ({ children }: Props) => {
  return <div className="flicker">{children}</div>
}
