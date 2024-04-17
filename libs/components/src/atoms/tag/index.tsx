import React from 'react';
import './styles.css';

interface TagProps {
    children?: React.ReactNode;
    color?: string;


}

export const Tag = ({ children, color}: TagProps) => {
    return (
        <span className='tag' style={{backgroundColor: color}}>
            {children}
        </span>
    )
};