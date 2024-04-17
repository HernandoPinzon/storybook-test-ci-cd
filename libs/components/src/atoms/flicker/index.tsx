import React from 'react';
import './styles.css';

export const Flicker = ({children}) => {
    return (
        <div className="flicker">
            {children}
        </div>
    );
};