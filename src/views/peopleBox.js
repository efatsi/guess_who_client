import React, { Component } from 'react'
import styles from './styles/home'
import allPeople from './data/people'
import {Motion, spring} from 'react-motion';

class PeopleBox extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (props) {
    let newState = {}
    allPeople.map(function(person) {
      newState[person.slug] = props.people.includes(person.slug)
    })
    this.setState(newState)
  }

  renderPeople () {
    let index = -1
    return allPeople.map(function(person) {
      if (this.state[person.slug]) index += 1

      return this.renderPerson(person, index)
    }.bind(this))
  }

  renderPerson (person, index) {
    let showing = this.state[person.slug]

    return (
      <Motion key={ person.slug }
        defaultStyle={{
          height: 200,
          left:   0
        }}
        style={{
          height: spring(showing ? 200 : 0),
          left:   spring(this.leftFor(index))
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
      height: value.height,
      width:  value.height,
      ...styles.profilePic
    }
  }

  leftFor (index) {
    let count = this.props.people.length
    let low = 50 - (10 * count)
    let high = 100 - low
    let left = low + (((high - low) / (count - 1)) * index)
    return left
  }

  render () {
    return (
      <div style={styles.peopleBox}>
        { this.renderPeople() }
      </div>
    )
  }
}

export default PeopleBox
