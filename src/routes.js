import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Todo, About } from './components'

export default props => (
  <HashRouter>
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect exact from="/" to="/todos" />
  </HashRouter >
)