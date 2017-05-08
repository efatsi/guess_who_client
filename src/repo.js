import Microcosm from 'microcosm'

import Info         from './domains/info'
import WaitScreen   from './effects/waitScreen'
import PusherClient from './effects/pusherClient'

class Repo extends Microcosm {
  setup () {
    let repo = this

    repo.addDomain('info', Info)
    repo.addEffect(WaitScreen)
    repo.addEffect(PusherClient)
  }
}

export default Repo
