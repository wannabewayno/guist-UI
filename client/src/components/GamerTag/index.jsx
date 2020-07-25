import React from 'react';
import { gamertagStyle, numberStyle, containerStyle } from './style.js';

export default function Gamertag({ gamertag, rank }){
    function parseRank(rank){
        switch(rank){
            case 1: return '1st'
            case 2: return '2nd'
            case 3: return '3rd'
            default: return `${rank}th`
        }
    }
    return (
        <li style={containerStyle}>
            <p style={numberStyle}>
                {parseRank(rank)}
            </p>
            <p style={gamertagStyle}>
                {gamertag}
            </p>
        </li>
    )
}