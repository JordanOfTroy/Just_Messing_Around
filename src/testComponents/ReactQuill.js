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

  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      [{'font': ['serif', 'monospace', false]}],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'},],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  formats = [
    'header',
    'font',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'align', 
    'link', 'image'
  ]

  render () {
    return (
      <div>
        <ReactQuill value={this.state.text}
                  onChange={this.handleChange}
                  modules={this.modules}
                  formats={this.formats}
                  theme = 'snow'
                  />
      </div>
    )
  }
}

export default Quill