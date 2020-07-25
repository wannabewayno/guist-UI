import React, { useState, useEffect } from 'react';
import { Button, Container, FormContainer, SearchBar, SubmitButton, ShowOnClick, InlineContainer } from 'grass-roots-react';
import Gamertag from './components/GamerTag';
import { colours, names, gamertags } from './content';
import API from './utils/API';
const { sessionName } = names;
const { salmon } = colours;

export default function App() {

  const [ sessionID, setSessionID ] = useState(undefined);
  const [ isDisabled, setIsDisabled ] = useState(false);

  function handleSubmit(formData){

    setIsDisabled(true); // disable the button
    console.log(isDisabled);
    console.log(formData);
    API.createSession(formData)
    .then(response => response.json())
    .then(({ _id }) => setSessionID(_id))
    .catch(error => {
      setIsDisabled(false); // re-enable the button
      console.log(error)
    });
  }

  useEffect(()=>console.log(isDisabled))

 const [ gamertags, setGamerTags ] = useState(['Wayne','Kane','Josh','Eumir','Miles','Pete','Ken','Georgie','Roz','Max','Caroline']) 

  return (
    <>
    <Container>
      <ul style={{margin:'0 auto',position:'relative'}}>
      	{gamertags.map((gamertag,index) => (<Gamertag rank={index+1} gamertag={gamertag} key={index}/>))}
      </ul>

      <FormContainer onSubmit={handleSubmit}>

        <ShowOnClick transitionTime="500ms" showOnMount>
          <div handleliftup=''>
          	<SearchBar name={sessionName} backgroundColor={salmon}/>
          </div>
          <SubmitButton
            text='Create new session'
            size="medium"
            color={salmon}
            style={{margin:'5px auto'}}
            disabled={isDisabled}
          />
        </ShowOnClick>
      </FormContainer>
    </Container>
    </>
  );
}
