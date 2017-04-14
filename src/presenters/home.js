import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import PeopleBox from '../views/peopleBox'

class Home extends Presenter {
  getModel () {
    return {
      answers: state => state.info.answers,
      done:    state => state.info.done,
      waiting: state => state.info.waiting,
      people:  state => {
        return state.info.people.people
      }

    }
  }

  renderDone () {
    if (this.model.waiting) {
      let waitingStyle = {
        width:          "100%",
        height:         "100%",
        position:       "absolute",
        display:        "flex",
        justifyContent: "center",
        alignItems:     "center"
      }
      return (
        <div style={waitingStyle}>
          <h1 style={{textAlign: "center"}}>
            Want to play? Say: <br /><br />"Ask Guess Who to begin"
          </h1>
        </div>)
    } else if (this.model.done) {
      let doneStyle = {
        width:          "100%",
        height:         "150px",
        position:       "absolute",
        display:        "flex",
        justifyContent: "center",
        alignItems:     "center"
      }
      return (
        <div style={doneStyle}>
          <h1>Hopefully this person!</h1>
        </div>
      )
    }
  }

  renderAnswer (answer) {
    return (
      <li key={ answer.id }>
        { answer.title }
      </li>
    )
  }

  render () {
    let { people } = this.model

    return (
      <div>
        { this.renderDone() }

        <PeopleBox people={people} />
      </div>
    )
  }
}

export default Home
