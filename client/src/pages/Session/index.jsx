import React, { useState, useEffect } from 'react';
import { Button, Container, FormContainer, SearchBar, SubmitButton, ShowOnClick, InlineContainer, useLiftState } from 'grass-roots-react';
import { colours, names } from '../../content';
import Gamertag from '../../components/Gamertag';
import API from '../../utils/API';
const { sessionName } = names;
const { salmon } = colours;

export default function Session() {

  const [ liftedStates, liftUpState ] = useLiftState();
  const [ sessionID, setSessionID ] = useState(undefined);
  const [ disableCreateSession, setDisableCreateSession ] = useState(false);
  const [ disableAddGame, setDisableAddGame ] = useState(true);
 const [ gamertags, setGamertags ] = useState([]);

  function createNewSession(formData){
    console.log('is this firirng?');
    liftedStates.setShowOnClickState(false); //hide the input
    setDisableCreateSession(true); // disable the button
    console.log(formData);
    API.createSession(formData)
    .then(response => response.json())
    .then(({ _id }) => {
      //session created enable the add Game button
      setDisableAddGame(false)
      console.log(_id);
      setSessionID(_id) // store sessionID 
    })
    .catch(error => {
      liftedStates.setShowOnClickState(true); // show the input again
      setDisableCreateSession(false); // re-enable the button
      console.log(error)
    });
  }

  function addGame(){
    setDisableAddGame(true)
    API.createGame(sessionID)
    .then(response => response.json())
    .then(session => {
      console.log('Session:',session);
      setGamertags(session.ranks.KDRatios)
      setDisableAddGame(false) //re-enable button to add another game
    })
    .catch(error => {
      console.log(error) // catch any errors
    });
  }

  useEffect(()=>console.log(disableCreateSession),[disableCreateSession])
  useEffect(()=>console.log(liftedStates),[liftedStates])


  return (
    <>
    <Container>
      <ul style={{margin:'0 auto',position:'relative'}}>
      	{gamertags.map(({gamertag,team},index) => (<Gamertag rank={index+1} gamertag={gamertag} team={team} key={index}/>))}
      </ul>

      <FormContainer onSubmit={createNewSession}>

        <ShowOnClick transitionTime="500ms" showOnMount liftUpState={liftUpState} provideButton={false}>
          <div>
          	<SearchBar name={sessionName} backgroundColor={salmon}/>
          </div>
        </ShowOnClick>
        <SubmitButton
            text='Create new session'
            size="medium"
            color={salmon}
            style={{margin:'5px auto'}}
            disabled={disableCreateSession}
          />
      </FormContainer>
      <Button
        text='Add Game!'
        size="medium"
        color={salmon}
        style={{margin:'5px auto'}}
        disabled={disableAddGame}
        onClick={addGame}
      />
            
    </Container>
    </>
  );
}
