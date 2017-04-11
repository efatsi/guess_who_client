import React from 'react'
import Presenter from 'microcosm/addons/presenter'

class Home extends Presenter {
  getModel () {
    return {
      answers: state => state.answers,
      people:  state => state.people
    }
  }

  renderAnswer (answer) {
    return (
      <li key={ answer.id }>
        { answer.title }
      </li>
    )
  }

  renderPerson (person) {
    return (
      <li key={ person.id }>
        <img src={ person.url } height="200"/>
      </li>
    )
  }

  render () {
    let { answers, people } = this.model

    return (
      <div>
        Answers
        <ul>
          { answers.map(this.renderAnswer) }
        </ul>

        People
        <ul>
          { people.map(this.renderPerson) }
        </ul>
      </div>
    )
  }
}

export default Home
