import { fetchInfo, updateInfo } from '../actions'

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

  register () {
    return {
      [updateInfo]: this.update,
      [fetchInfo]:  this.update,
    }
  }
}

export default InfoDomain
