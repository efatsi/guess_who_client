import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import PeopleBox from '../views/peopleBox'

class Home extends Presenter {
  getModel () {
    return {
      answers: state => state.info.answers,
      done:    state => state.info.done,
      people:  state => state.info.people
    }
  }

  renderDone () {
    if (this.model.done) {
      return (<h1>Hopefully this person!</h1>)
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
