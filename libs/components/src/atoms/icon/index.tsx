import React from "react";

import * as IconsFa from 'react-icons/fa';
import * as IconsIo from 'react-icons/io';

const Icons = {
    ...IconsFa,
    ...IconsIo
}   

enum IconSize {
    s = '0.875rem',
    m = '1rem',
    l = '1.125rem',
    xl = '1.25rem',
  }

type IconName = keyof typeof Icons;

interface IconProps {
    name: IconName;
    size?: 's' | 'm' | 'l' | 'xl';
    style?: React.CSSProperties;
}

export const Icon = ({ name, size = 'm', style }: IconProps) => {
    const Icon = Icons[name];
    
    return (
        <Icon size={IconSize[size]}  className='icon' style={style}/>
    )
}