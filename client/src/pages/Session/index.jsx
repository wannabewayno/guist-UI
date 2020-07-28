import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ExtendString } from 'grass-roots-react';
import Rank from '../../components/Rank';
import GraphContainer from '../../components/GraphContainer';
import Tabs from '../../components/Tabs';
import API from '../../utils/API';

ExtendString(); // extends string prototype

export default function Session() {

  const { sessionID } = useParams()
  const [ currentSession, setCurrentSession ] = useState(undefined);

  // get game session when rendering
  useEffect(() => {
    API.getSession({_id:sessionID})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCurrentSession(data[0]);
    })
    .catch(error => console.log(error.response))
  },[])

  useEffect(() => console.log('line 65 useEffect:',currentSession),[currentSession])

  return (
    <>
    <Container>
      <Tabs
        tabs={
          currentSession?
            Object.keys(currentSession.ranks).map(key => (
              { text:key.capitalization(), active:key==='kills'})):undefined}
      />
      <h3 style={{fontSize:'20px'}}>Rank</h3>
      <ul style={{margin:'0 auto',position:'relative'}}>
        {currentSession? 
          currentSession.ranks['K/D Ratios'].map(
            ({gamertag,team,total},index) => 
              (<Rank
                rank={index+1}
                text={gamertag}
                score={total}
                team={team}
                key={index}
              />)
          ):null}
      </ul>

      <GraphContainer/>

    </Container>
    </>
  );
}
