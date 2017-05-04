import React, { Component } from 'react'
import styles from './styles/home'
import {Motion, spring} from 'react-motion';
import random from '../lib/random'

class PeopleBox extends Component {

  dimension(showing) {
    let { people, status, columns, rows } = this.props

    let count = columns + rows

    if (showing) {
      if (count === 2) {
        return 500
      } else if (count < 8) {
        return 300
      } else if (count < 12) {
        return 250
      } else {
        return 200
      }
    } else {
      return 0
    }
  }

  renderPerson = (person, index) => {
    let { status } = this.props

    let showing = status === "waiting" ? false : person.visible

    return (
      <Motion key={ person.id }
        defaultStyle={{
          height: 200,
          width:  200,
          left:   random(0, 500),
          top:    random(0, 500)
        }}
        style={{
          height: spring(this.dimension(showing)),
          width:  spring(this.dimension(showing)),
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

export default PeopleBox
