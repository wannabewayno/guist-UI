import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, FormContainer, SearchBar, SubmitButton, ShowOnClick, useLiftState } from 'grass-roots-react';
import { colours, names } from '../../content';
import Rank from '../../components/Rank';
import API from '../../utils/API';
const { sessionName } = names;
const { salmon } = colours;

export default function Session() {

  const { sessionID } = useParams()
  console.log(sessionID);

  const [ liftedStates, liftUpState ] = useLiftState();
  const [ disableCreateSession, setDisableCreateSession ] = useState(false);
  const [ disableAddGame, setDisableAddGame ] = useState(true);
  const [ currentSession, setCurrentSession ] = useState(undefined);

  function createNewSession(formData){

    liftedStates.setShowOnClickState(false); //hide the input
    setDisableCreateSession(true); // disable the button
    console.log(formData);

    API.createSession(formData)
    .then(response => response.json())
    .then(({ _id }) => {
      //session created enable the add Game button
      setDisableAddGame(false)
      console.log(_id);
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
      setCurrentSession(session)
      setDisableAddGame(false) // re-enable button to add another game
    })
    .catch(error => {
      console.log(error) // catch any errors
    });
  }

  useEffect(() => {
    API.getSession({_id:sessionID})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCurrentSession(data[0]);
      console.log('line 60 useEffect',currentSession);
    })
    .catch(error => console.log(error.response))
  },[])

  useEffect(() => console.log('line 65 useEffect:',currentSession),[currentSession])


  return (
    <>
    <Container>

      <ul style={{margin:'0 auto',position:'relative'}}>
      	{currentSession? currentSession.ranks.KDRatios.map(
      ({gamertag,team},index) => (<Rank rank={index+1} text={gamertag} team={team} key={index}/>)
    ):null}
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
