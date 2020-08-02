import React from 'react';
import { gamertagStyle, numberStyle, containerStyle, scoreStyle } from './style.js';
import { colours } from '../../content';
import parseTeam from '../../utils/parseTeam';
import parseRank from '../../utils/parseRank';

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