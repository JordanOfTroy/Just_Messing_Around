import React ,{Component} from 'react'

class Animation1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      thingsToDo: [],
      newThing: '',
      counter: 0
    }

  
  }

  handleUserInput = (e) => {
    
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addToToDos = () => {
    let {thingsToDo, newThing} = this.state

    let copyThingsTODO = thingsToDo.slice()
    if (newThing.length > 0) {
      copyThingsTODO.push(newThing)
    } else return

    this.setState({
      thingsToDo: copyThingsTODO,
      newThing: '',
      counter: this.state.counter +=1
    })
  }

  finishTask = (index) => {
    // console.log('fired')
   const listItems = document.getElementsByClassName('listItem')
    for (let i=0; i<listItems.length; i++) {
      // console.log('inside 4loop', listItems[i].getAttribute('data'))

      if (listItems[i].getAttribute('data') == index) {
        if (listItems[i].classList.contains('is-done')) {
          listItems[i].classList.remove('is-done')
          this.setState({
            counter: this.state.counter +=1
          })
        }
        else {
          listItems[i].classList.add('is-done')
          this.setState({
            counter: this.state.counter -=1
          })
      }
    }


  }}

  render() {
    let {newThing, thingsToDo, counter} = this.state
    let numOfThings = thingsToDo.length
    
    let list = thingsToDo.map((thing, index) => {
      return (
        <li 
          key={index}
          data={index}
          onClick = {() => this.finishTask(index)}
          className = 'listItem'
        >{thing}</li>
      )
    })

    return (
      <>
      <div>
        <h1>TODO List</h1>
        <input 
          onChange = {this.handleUserInput}
          value = {newThing}
          name = 'newThing'
        />
        <button
          onClick = {this.addToToDos}
        >ADD</button>

        <h2>{`${counter} remaining out of ${numOfThings} tasks`}</h2>

        <ul>
          {list}
        </ul>

      </div>
      <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>

     
      </>
    )
  }
}

export default Animation1