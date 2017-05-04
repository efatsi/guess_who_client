import Microcosm from 'microcosm'
import Pusher from 'pusher-js'

import { fetchInfo, updateInfo, wait, mixItUp } from './actions'
import Info from './domains/info'

class Repo extends Microcosm {
  setup () {
    let repo = this

    repo.addDomain('info', Info)

    let action = repo.push(fetchInfo)
    action.onDone(function(data) {
      clearInterval(repo.mixInterval);

      if (data.status === "waiting") {
        this.mixInterval = setInterval(function() {repo.push(mixItUp)}, 3000)
      } else if (data.status === "done") {
        setTimeout(function() {
          repo.push(wait)
          this.mixInterval = setInterval(function() {repo.push(mixItUp)}, 3000)
        }, 5000)
      }
    })

    var pusher = new Pusher('cbd953bd1696f9fdef9e', {
      encrypted: true
    });

    var channel = pusher.subscribe('game');
    channel.bind('update', function(data) {
      if (data.status === "done") {
        clearInterval(repo.mixInterval);

        setTimeout(function() {
          repo.push(wait)
          repo.mixInterval = setInterval(function() {repo.push(mixItUp)}, 3000)
        }, 10000)
      }

      repo.push(updateInfo, data)
    });

    channel.bind('wait', function(data) {
      repo.push(wait)
    });
  }
}

export default Repo
