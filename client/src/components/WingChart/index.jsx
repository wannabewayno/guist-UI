import React from 'react';
import { containerStyle, leftStyle, rightStyle } from './style';

export default ({data,style}) => {
    if(data) { // do nothing if no data

        const { label:{ left , right }, leftBar, rightBar } = data;

        function getBarStyle(bar){
            const { color , borderColor , thickness , gap } = bar;
            return { backgroundColor:color, border:`1px solid`, borderColor, height:thickness, marginTop:gap };
        }

        const leftBarStyle = getBarStyle(leftBar);
        const rightBarStyle = getBarStyle(rightBar);

        let { leftData, rightData } = data;

        // find maximum, all data is now relative to this
        const baseline = Math.max(Math.max(...leftData),Math.max(...rightData))/0.9;
        leftData = leftData.map(data => (data/baseline)*100)
        rightData = rightData.map(data => (data/baseline)*100)

        return (
            // container
            <div style={{...containerStyle,...style}}>
                {/* left data */}
                <div style={leftStyle}>
                    {leftData.map((data,index) =>(<div style={{...leftBarStyle,width:`${data}%`}} key={index}></div>))}
                </div>
                {/* right data */}
                <div style={rightStyle}>
                    {rightData.map((data,index) =>(<div style={{...rightBarStyle,width:`${data}%`}} key={index}></div>))}
                </div>
            </div>
        )
    } else {
        return null
    }
    
}