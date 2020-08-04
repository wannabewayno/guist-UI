import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InlineContainer, ExtendString, Container } from 'grass-roots-react';
import Rank from '../../components/Rank';
import GraphContainer from '../../components/GraphContainer';
import Tabs from '../../components/Tabs';
import API from '../../utils/API';
import WingChart from '../../components/WingChart';
import generateWingChartData from './generateWingChartData';

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

  const data = generateWingChartData(currentSession,'kills',['team','capitalists']);

  return (
      <Container>
      	<InlineContainer minWidth='300px' gap='10vw'>
      	  <Tabs
      	    tabs={
      	      currentSession?
      	        Object.keys(currentSession.ranks).map(key => (
      	          { text:key.capitalization(), key, active:key==='kills'}))
      	      :undefined}
      	      data={currentSession?currentSession.ranks:undefined}
      	  />
      	  <WingChart data={data} style={{width:'100%'}}/>
      	</InlineContainer>
      </Container>
  );
}
