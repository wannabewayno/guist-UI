import { Color } from 'grass-roots-react';
import { colours } from '../content';

export default team => {
    const { salmon, red, blue } = colours
    switch(team){
        case 'terrorists': return Color(red)
        case 'freedom': return Color(blue)
        default: return salmon
    }
}