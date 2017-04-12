import Microcosm from 'microcosm'

import { updateInfo } from './actions'

import Info from './domains/info'

import API from './api'

class Repo extends Microcosm {
  setup () {
    this.addDomain('info', Info)

    let repo = this

    API.info().then(function(response) {
      repo.push(updateInfo, response)
    })

  }
}

export default Repo
