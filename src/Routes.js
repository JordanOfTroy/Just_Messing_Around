import React from 'react' 
import {Switch, Route} from 'react-router-dom'
import Animation1 from './testComponents/Animation1'

export default (
  <Switch>
    <Route component={Animation1} path='/animation1'/>
  </Switch>
)