import React from 'react';
import { gamertagStyle, numberStyle, containerStyle, scoreStyle } from './style.js';
import { Color } from 'grass-roots-react';
import { colours } from '../../content'


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
        case 'terrorists': return Color(red)
        case 'freedom': return Color(blue)
        default: return salmon
    }
}

export default function Rank({ text, rank, team, score }) {

    return (
        <li style={containerStyle}>
            <p style={{...numberStyle, borderColor:parseTeam(team).CSS()}}>
                {parseRank(rank)}
            </p>
            <p
                style={{
                    ...gamertagStyle,
                    backgroundColor:parseTeam(team).CSS(),
                    borderColor:parseTeam(team).CSS(),
                    color:parseTeam(team).getContrast(),
                }}
            >
                {text}
            </p>
            <p style={{...scoreStyle, borderColor:parseTeam(team).CSS()}}>
                {score}
            </p>
        </li>
    )
}