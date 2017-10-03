import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';

export default ()=>(
  <Router>
    <Route path="/app" component={App} />
 </Router>
);
