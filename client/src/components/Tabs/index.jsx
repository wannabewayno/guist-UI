import React, { useState, useEffect, cloneElement } from 'react';
import { ExtendArray } from  'grass-roots-react';
import { containerStyle, buttonStyle, activeStyle } from './style.js';
ExtendArray();


export default ({tabs=[]}) => {

    const buttons = tabs.map(({text,icon,active},index) => {
        return (
            <button
                style={{...buttonStyle}}
                onClick={(event) => handleClick(event)}
                key={index}
                style={active?activeStyle:buttonStyle}
            >
                {text}
            </button>
        )
    })

    function handleClick(event){

        const clickedButton = event.currentTarget;
        let { pass, fail } = buttons.separate(button => button.props.children===clickedButton.textContent);
        
        console.log(pass);
        console.log(fail);

        // set passed elements to big text
        pass = pass.map(button => cloneElement(
            button,
            {...button.props, style:activeStyle },
            button.props.children
            )
        );

        // reset failed elements to initial text
        fail = fail.map(button => cloneElement(
            button,
            {...button.props, style:buttonStyle },
            button.props.children
            )
        );

        //put the clicked button infront
        const sortedButtons = [...pass,...fail]

        setTabs(sortedButtons);
    }

    //set state
    const [Tabs, setTabs] = useState(buttons)

    // check for updated props
    useEffect(()=>setTabs(buttons),[tabs])

    return (
        <div style={containerStyle}>
            {Tabs}
        </div>
    )
}


