import React from 'react';
import { FormContainer, SearchBar, SubmitButton } from 'grass-roots-react';
import { names } from '../../content';

const { sessionPhrase } = names; 

export default function Home({connectSession}){
    

    return (
        <section style={{padding:'1.5rem', color:'white'}}>
            <a href='session'>CLICK ME</a>
            <h1 style={{textAlign:'center'}}>Connect to a Session</h1>
            <FormContainer onSubmit={connectSession}>
                <SearchBar name={sessionPhrase}/>
                <SubmitButton
                    text='Connect'
                    size='medium'
                    color='rgb(255,255,255)'
                    style={{margin:'15px auto'}}
                />
            </FormContainer>
            
        </section>
    )
}