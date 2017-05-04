import React, { Component } from 'react'
import styles from './styles/home'
import {Motion, spring} from 'react-motion';
import random from '../lib/random'

class PeopleBox extends Component {

  render () {
    console.log(this.state)
    let { people } = this.props

    return (
      <div style={styles.peopleBox}>
        { people.map(this.renderPerson) }
      </div>
    )
  }

  renderPerson = (person, index) => {
    this.setTempPositions(person)

    return (
      <Motion key={ person.id }
        defaultStyle={{
          height: 200,
          width:  200,
          left:   random(-100, 500),
          top:    random(-100, 500)
        }}
        style={{
          height: spring(this.dimension(person)),
          width:  spring(this.dimension(person)),
          left:   spring(person.tempLeft, {stiffness: this.stiffness(), damping: random(8,12)}),
          top:    spring(person.tempTop, {stiffness: this.stiffness(), damping: random(8,12)})
        }}>

        { value => (
          <div style={this.stylesFor(value)}>
            <img src={ person.url } alt="" style={ styles.image } />
          </div>
        ) }
      </Motion>
    )
  }

  dimension(person) {
    let { columns, rows } = this.props
    let count = columns + rows

    if (this.waiting()) return 100

    if (person.visible) {
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

  stiffness () {
    return this.waiting() ? 15 : 80
  }

  setTempPositions (person) {
    if (this.waiting()) {
      if (this.props.mixCount == 0 || random(0, 100) < 7) {
        person.tempLeft = random(5, 90)
        person.tempTop  = random(5, 90)
      }
    } else {
      if (person.visible) {
        person.tempLeft = person.left
        person.tempTop  = person.top
      } else {
        person.tempLeft = random(-100, 500)
        person.tempTop  = random(-100, 500)
      }
    }
  }

  stylesFor (value) {
    let defaultStyle = {
      left:    value.left + "%",
      top:     value.top + "%",
      height:  value.height,
      width:   value.width,
      ...styles.profilePic
    }

    if (this.waiting()) {
      return {opacity: 0.2, ...defaultStyle}
    } else {
      return defaultStyle
    }
  }

  waiting () {
    return this.props.status === "waiting"
  }

}

export default PeopleBox
