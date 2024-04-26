import React from 'react';
import './styles.css';

interface TagProps {
    children?: React.ReactNode;
    color?: string;


}

export const Tag = ({ children, color = '#B0C6FF'}: TagProps) => {
    return (
        <span className='tag' style={{backgroundColor: color}}>
            {children}
        </span>
    )
};