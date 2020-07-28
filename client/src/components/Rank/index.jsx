import React from 'react';
import { gamertagStyle, numberStyle, containerStyle, scoreStyle } from './style.js';
import { colours } from '../../content';
import parseTeam from '../../utils/parseTeam';


function parseRank(rank){
    switch(rank){
        case 1: return '1st'
        case 2: return '2nd'
        case 3: return '3rd'
        default: return `${rank}th`
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