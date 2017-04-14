import Microcosm from 'microcosm'
import Pusher from 'pusher-js'

import { updateInfo } from './actions'
import Info from './domains/info'

class Repo extends Microcosm {
  setup () {
    this.addDomain('info', Info)

    var pusher = new Pusher('cbd953bd1696f9fdef9e', {
      encrypted: true
    });

    let repo = this
    var channel = pusher.subscribe('game');
    channel.bind('update', function(data) {
      repo.push(updateInfo, data)
    });

    channel.bind('wait', function(data) {
      repo.push(updateInfo, {
        answers: [],
        people: {
          people: []
        },
        waiting: true,
        done: false
      })
    });
  }
}

export default Repo
