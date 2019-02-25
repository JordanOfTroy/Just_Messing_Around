import React, {Component} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class Quill extends Component {
  constructor (props) {
    super (props)

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    // console.log(this.state.text)
    this.setState({ text: value })
  }

  render () {
    return (
      <div>
        <ReactQuill value={this.state.text}
                  onChange={this.handleChange}
                  theme = 'snow'
                  />
      </div>
    )
  }
}

export default Quill