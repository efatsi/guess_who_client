import { updateInfo } from '../actions'

const InfoDomain = {
  getInitialState () {
    return {
      answers: [],
      people: [],
      done: false
    }
  },

  update (state, info) {
    return info
  },

  register () {
    return {
      [updateInfo]: this.update
    }
  }
}

export default InfoDomain
