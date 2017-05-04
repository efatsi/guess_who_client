import React, { Component } from 'react'
import styles from './styles/home'
import {Motion, spring} from 'react-motion';
import random from '../lib/random'

class GameScreen extends Component {

  renderPerson = (person, index) => {
    let showing = person.visible

    return (
      <Motion key={ person.id }
        defaultStyle={{
          height: 200,
          width:  200,
          left:   random(0, 500),
          top:    random(0, 500)
        }}
        style={{
          height: spring(showing ? 200 : 0),
          width:  spring(showing ? 200 : 0),
          left:   spring(person.left, {stiffness: 120, damping: random(10,12)}),
          top:    spring(person.top, {stiffness: 120, damping: random(10,12)})
        }}>

        { value => (
          <div style={this.stylesFor(value)}>
            <img src={ person.url } alt="" style={ styles.image } />
          </div>
        ) }
      </Motion>
    )
  }

  stylesFor (value) {
    return {
      left:    value.left + "%",
      top:     value.top + "%",
      height:  value.height,
      width:   value.width,
      ...styles.profilePic
    }
  }

  render () {
    let { people } = this.props

    return (
      <div style={styles.peopleBox}>
        { people.map(this.renderPerson) }
      </div>
    )
  }
}

export default GameScreen
