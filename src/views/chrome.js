import React, { Component } from 'react'
import styles from './styles/home'

class Chrome extends Component {
  render () {
    let { status } = this.props

    if (status === "waiting") {
      return (
        <div style={styles.waitingStyle}>
          <h1 style={{textAlign: "center"}}>
            Want to play? Think of a Viget and say: <br /><br />"Alexa, Ask The Know It All to begin"
          </h1>
        </div>
      )
    }

    if (status === "done") {
      return (
        <div style={styles.doneStyle}>
          <h1>Hopefully this person!</h1>
        </div>
      )
    }

    // else
    return null
  }
}

export default Chrome
