import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useBackgroundImageRouter } from 'grass-roots-react';
import Header from './components/Header';
import Session from './pages/Session';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { backgroundImageMap } from './content';
import API from './utils/API';

export default function App() {

 useBackgroundImageRouter(backgroundImageMap);
  
 const [sessionID, setSessionID] = useState(undefined);

  function connectSession(formData){

      API.connectSession(formData)
      .then(response => response.json())
      .then(session => {

        if(session.length === 1) { // found unique session
          setSessionID(session[0]._id);
        } else {
          setSessionID(undefined);
        }

      })
      .catch(error => {
          console.log(error) // catch any errors
      });
  }

  useEffect(() => {
      if(sessionID){
        window.location.pathname = `/session/${sessionID}`
      }
  },[sessionID])

  return (
    <Router>
          <Header
            text='guist'
            color='white'
          />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home connectSession={connectSession}/>
            </Route>
            <Route exact path='/session/:sessionID'>
              <Session sessionID={sessionID}/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  );
}