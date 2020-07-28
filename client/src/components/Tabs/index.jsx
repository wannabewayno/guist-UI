import React, { useState, useEffect, cloneElement } from 'react';
import { ExtendArray } from  'grass-roots-react';
import { containerStyle, buttonStyle, activeStyle } from './style.js';
import Rank from '../Rank';

ExtendArray();

export default ({tabs=[],data={}}) => {
    console.log(tabs);
    console.log(data);
    let initialTab;
    const buttons = tabs.map(({text,key,icon,active},index,array) => {

        if(active) initialTab = { text, key }; // sets the initial tab
        if(!initialTab && index === array.length-1 && !active) { 
            // if nothing was flagged for initial mount, set as first element of tabs
            const { text, key } = array[0];
            initialTab = { text, key };
        }

        return (
            <button
                style={{...buttonStyle}}
                onClick={(event) => handleClick(event)}
                value={key}
                key={index}
                style={active?activeStyle:buttonStyle}
            >
                {text}
            </button>
        )
    })

    function handleClick(event){

        const clickedButton = event.currentTarget;
        const currentTab = {
            text:clickedButton.textContent,
            key:clickedButton.value,
        }
        let { pass, fail } = buttons.separate(button => button.props.children===clickedButton.textContent);
        
        console.log(pass);
        console.log(fail);

        // set passed elements to active style
        pass = pass.map(button => cloneElement(
            button,
            {...button.props, style:activeStyle },
            button.props.children
            )
        );

        // reset failed elements to default style
        fail = fail.map(button => cloneElement(
            button,
            {...button.props, style:buttonStyle },
            button.props.children
            )
        );

        //put the clicked button infront
        const sortedButtons = [...pass,...fail]

        setTabs({allTabs:sortedButtons, currentTab });
    }

    const [Tabs, setTabs] = useState({ allTabs:buttons, currentTab: initialTab })

    function displayData(){
        const { currentTab, allTabs } = Tabs;
        if(allTabs.length > 0) {
            const { key, text } = currentTab;
            if(key){ // prefer to use the key
                return data[key].map(({gamertag,team,total},index) => 
                    (<Rank
                        rank={index+1}
                        text={gamertag}
                        score={total}
                        team={team}
                        key={index}
                    />))
            }
            if(text){ // otherwise assume the text is a key
                return data[text].map(({gamertag,team,total},index) => 
                    (<Rank
                        rank={index+1}
                        text={gamertag}
                        score={total}
                        team={team}
                        key={index}
                    />))
            }
        }
    }

   

    // check for updated props
    useEffect(()=>setTabs({ allTabs:buttons, currentTab: initialTab }),[tabs])

    return (
        <>
            <div style={containerStyle}>
                {Tabs.allTabs}
            </div>
            <ul>
                {displayData()}
            </ul>
        </>
    )
}


