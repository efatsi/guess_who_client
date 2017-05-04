import { fetchInfo, updateInfo, wait } from '../actions'

const InfoDomain = {
  getInitialState () {
    return {
      people: {
        columns: 0,
        rows:    0,
        people:  []
      },
      status: "waiting"
    }
  },

  update (state, info) {
    return info
  },

  wait (state) {
    return {
      ...state,
      status: "waiting"
    }
  },

  register () {
    return {
      [updateInfo]: this.update,
      [fetchInfo]:  this.update,
      [wait]:       this.wait,
    }
  }
}

export default InfoDomain
