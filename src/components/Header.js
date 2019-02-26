import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super (props) 

  }

  render() {
    return(
      <div>
        <h1>This is the header</h1>
        <Link to='/'>Home</Link>
        <Link to='/animation1'>  Animation 1</Link>
        <Link to='/quill'>  React Quill</Link>
       <Link to='/form-practice'>   Form Practice</Link>

      </div>
    )
  }
}

export default Header