import { updateAnswers } from '../actions'

const AnswerDomain = {
  getInitialState () {
    return []
  },

  update (state, answers) {
    return answers
  },

  register () {
    return {
      [updateAnswers]: this.update
    }
  }
}

export default AnswerDomain
