import React from 'react' 
import {Switch, Route} from 'react-router-dom'
import Animation1 from './testComponents/Animation1'
import Quill from './testComponents/ReactQuill'

export default (
  <Switch>
    <Route component={Animation1} path='/animation1'/>
    <Route component={Quill} path = '/quill'/>
  </Switch>
)