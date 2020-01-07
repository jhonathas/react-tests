import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './routes/Home';
// const Home = lazy(() => import('./routes/Home'));
const Act = lazy(() => import('./routes/Act'));

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/act">Ações</Link>
          </li>
        </ul>

        <hr />

        <Suspense fallback="<div>Carregando ... </div>">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/act">
              <Act />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
