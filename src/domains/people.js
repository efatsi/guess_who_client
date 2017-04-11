import { updatePeople } from '../actions'

const PeopleDomain = {
  getInitialState () {
    return []
  },

  update (state, people) {
    return people
  },

  register () {
    return {
      [updatePeople]: this.update
    }
  }
}

export default PeopleDomain
