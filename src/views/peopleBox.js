import React, { Component } from 'react'
import styles from './styles/home'
import {Motion, spring} from 'react-motion';

class PeopleBox extends Component {

  renderPerson (person, index) {
    let showing = person.visible

    return (
      <Motion key={ person.id }
        defaultStyle={{
          height: 200,
          width:  200,
          left:   0,
          top:    0
        }}
        style={{
          height: spring(showing ? 200 : 0),
          width:  spring(showing ? 200 : 0),
          left:   spring(person.left),
          top:    spring(person.top)
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
      left:   value.left + "%",
      top:    value.top + "%",
      height: value.height,
      width:  value.width,
      ...styles.profilePic
    }
  }

  render () {
    let { people } = this.props

    return (
      <div style={styles.peopleBox}>
        { people.map(this.renderPerson.bind(this)) }
      </div>
    )
  }
}

export default PeopleBox
