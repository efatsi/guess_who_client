import React, { Component } from 'react'
import styles from './styles/home'

class PeopleBox extends Component {

  renderPeople () {
    let { people } = this.props

    return people.map(function(person, index) {
      return this.renderPerson(person, index)
    }.bind(this))
  }

  renderPerson (person, index) {
    return (
      <div key={ person.id } style={this.stylesFor(index)}>
        <img src={ person.url } height="200" alt=""/>
      </div>
    )
  }

  stylesFor (index) {
    let count = this.props.people.length
    let low = 50 - (10 * count)
    let high = 100 - low
    let percentage = low + (((high - low) / (count - 1)) * index)
    return {left: percentage + "%", ...styles.profilePic}
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
