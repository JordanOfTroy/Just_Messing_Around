import React, {Component} from 'react'
import axios from 'axios'

class FormPractice extends Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      isRobot: true

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("you've hit step One", e.target)
    let {name, email, username, password, isRobot} = this.state
    let formData = {name, email, username, password, isRobot}
    console.log('form data:', formData)
    axios.post('/api/formdata', formData).then(res => {
      console.log(`res status: ${res.status}`)
      console.log(`res data: ${res.data}`)
    })
  }

  handleTextInput = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`)
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleCheck = () => {
    let {isRobot} = this.state
    this.setState({
      isRobot: !isRobot
    })
  }

  render () {
    let {name, email, username, password, isRobot} = this.state
    return (
      <div>
        <br/>
        <form onSubmit = {this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={name} placeholder='name' onChange={this.handleTextInput}/>
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" value={email} placeholder='email' onChange={this.handleTextInput}/>
          </div>

          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" value={username} placeholder='username' onChange={this.handleTextInput}/>
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={password} placeholder='password' onChange={this.handleTextInput}/>
          </div>

          <div>
            <label htmlFor="isRobot">I am not a robot</label>
            <input type="checkbox" name="isRobot" id="isRobot" value={isRobot} onChange={this.handleCheck}/>
          </div>

          <input type="submit" name="" id=""/>
        </form>
      </div>
    )
  }

}

export default FormPractice