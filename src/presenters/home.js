import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import GameScreen from '../views/gameScreen'

class Home extends Presenter {
  getModel () {
    return {
      people: state => state.info.people.people,
      status: state => state.info.status
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
            Want to play? Think of a Viget and say: <br /><br />"Alexa, Ask The Know It All to begin"
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

  render () {
    let { people, status } = this.model

    return (
      <GameScreen people={people} status={status}/>
    )
  }
}

export default Home
