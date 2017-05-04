import { fetchInfo, updateInfo, wait, mixItUp } from '../actions'

const InfoDomain = {
  getInitialState () {
    return {
      people: {
        columns: 0,
        rows:    0,
        people:  []
      },
      mixCount: 0,
      status: "waiting"
    }
  },

  update (state, info) {
    return {...state, ...info}
  },

  wait (state) {
    return {
      ...state,
      mixCount: 0,
      status:   "waiting"
    }
  },

  mixIt (state) {
    return {
      ...state,
      mixCount: state.mixCount + 1
    }
  },

  register () {
    return {
      [updateInfo]: this.update,
      [fetchInfo]:  this.update,
      [wait]:       this.wait,
      [mixItUp]:    this.mixIt,
    }
  }
}

export default InfoDomain
