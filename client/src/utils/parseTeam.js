import { Color } from 'grass-roots-react';
import { colours } from '../content';

export default team => {
    const { salmon, red, blue } = colours
    switch(team){
        case 'communists': return Color(red)
        case 'capitalists': return Color(blue)
        default: return Color(salmon)
    }
}