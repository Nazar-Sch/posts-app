import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Users from './pages/Users'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Details from './pages/Details';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Users} />
      <Route path="/posts/:id" component={Posts} />
      <Route path="/post/:id" component={Post} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </Router>
)

export default App