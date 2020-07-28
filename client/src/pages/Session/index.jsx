import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'grass-roots-react';
import Rank from '../../components/Rank';
import API from '../../utils/API';

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

      <ul style={{margin:'0 auto',position:'relative'}}>
        {currentSession? 
          currentSession.ranks.KDRatios.map(
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

    </Container>
    </>
  );
}
