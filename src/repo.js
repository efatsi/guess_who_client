import Microcosm from 'microcosm'

import { updateAnswers, updatePeople } from './actions'

import Answers from './domains/answers'
import People from './domains/people'

import API from './api'

class Repo extends Microcosm {
  setup () {
    this.addDomain('answers', Answers)
    this.addDomain('people', People)

    let repo = this

    API.info().then(function(response) {
      repo.push(updateAnswers, response.answers)
      repo.push(updatePeople, response.people)
    })

  }
}

export default Repo
