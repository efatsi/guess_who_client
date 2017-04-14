import { getPics } from '../actions'

const PicsDomain = {
  getInitialState () {
    return []
  },

  update (state, pics) {
    return pics
  },

  register () {
    return {
      [getPics]: this.update,
    }
  }
}

export default PicsDomain
