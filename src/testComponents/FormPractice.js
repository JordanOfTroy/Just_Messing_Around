import React, {Component} from 'react'

class FormPractice extends Component {
  constructor (props) {
    super (props)

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <br/>
        <form action="#">
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="" id="firstName" placeholder='First Name'/>
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="" id="email" placeholder='email'/>
          </div>

          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="" id="username" placeholder='username'/>
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="" id="password" placeholder='password'/>
          </div>

          <div>
            <label htmlFor="robot">First Name</label>
            <input type="checkbox" name="" id="robot" />
          </div>

          <input type="submit" name="" id=""/>
        </form>
      </div>
    )
  }

}

export default FormPractice