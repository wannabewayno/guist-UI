import React from 'react';
import { useLocation, useParams } from 'react-router-dom'; 
import { headlineStyle, headerStyle } from './style';

export default function Header({
    text,
    color = 'transparent',
    textColor = 'hsl(0,0%,0%)',
    skin = 'default',
    position = 'relative',
    height = '10vh',
    style = {}
}){
    const params = useParams();
    console.log(params);
    const location = useLocation();
    console.log(location);
    const headerCSS = { ...headerStyle, color:textColor, height, backgroundColor:color,...style }

    return (
        <header style={headerCSS}>
            <a style={headlineStyle} href='/'>
                {text}
            </a>
        </header>
    )
}