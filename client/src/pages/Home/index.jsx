import React from 'react';
import { FormContainer, SearchBar, SubmitButton, Container } from 'grass-roots-react';
import { names, colours } from '../../content';
const { sessionPhrase } = names; 
const { sessionColour } = colours

export default function Home({connectSession}){

    return (
        <Container style={{padding:'1.5rem 0%', color:'white'}}>

            <h1 style={{textAlign:'center'}}>Connect to a Game Session</h1>
            <FormContainer onSubmit={connectSession}>
                <SearchBar
                    name={sessionPhrase}
                    color={sessionColour}
                    placeholder="despite catapult botany..."
                />
                <SubmitButton
                    text='Connect'
                    size='medium'
                    color='rgb(255,255,255)'
                    style={{margin:'15px auto'}}
                />
            </FormContainer>
            
        </Container>
    )
}