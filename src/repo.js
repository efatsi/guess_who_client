import Microcosm from 'microcosm'
import Pusher from 'pusher-js'

import { fetchInfo, updateInfo, wait } from './actions'
import Info from './domains/info'

class Repo extends Microcosm {
  setup () {
    this.addDomain('info', Info)

    this.push(fetchInfo)

    var pusher = new Pusher('cbd953bd1696f9fdef9e', {
      encrypted: true
    });

    let repo = this

    var channel = pusher.subscribe('game-dev');
    channel.bind('update', function(data) {
      console.log(data)
      repo.push(updateInfo, data)
    });

    channel.bind('wait', function(data) {
      repo.push(wait)
    });
  }
}

export default Repo
