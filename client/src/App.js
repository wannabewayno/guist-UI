import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useBackgroundImageRouter from './hooks/useBackgroundImageRouter';
import Header from './components/Header';
import Session from './pages/Session';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { backgroundImageMap } from './content'


export default function App() {

  useBackgroundImageRouter(backgroundImageMap);

  return (
    <Router>
          <Header
            text='guist'
            color='white'
          />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home/>
            </Route>
            <Route exact path="/session">
              <Session/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  );
}