import React from 'react';
import { gamertagStyle, numberStyle, containerStyle } from './style.js';
import { colours } from '../../content'


export default function Gamertag({ gamertag, rank, team }) {

    
    function parseRank(rank){
        switch(rank){
            case 1: return '1st'
            case 2: return '2nd'
            case 3: return '3rd'
            default: return `${rank}th`
        }
    }
    
    function parseTeam(team){
        const { salmon, red, blue } = colours
        switch(team){
            case 'terrorists': return red
            case 'freedom': return blue
            default: return salmon
        }
    }

    return (
        <li style={containerStyle}>
            <p style={{...numberStyle, borderColor:parseTeam(team)}}>
                {parseRank(rank)}
            </p>
            <p style={{...gamertagStyle, backgroundColor:parseTeam(team), borderColor:parseTeam(team)}}>
                {gamertag}
            </p>
        </li>
    )
}