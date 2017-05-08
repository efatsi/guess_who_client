import { fetchInfo, updateInfo, mixItUp, wait } from '../actions'

class WaitScreen {
  setup (repo) {
    repo.push(fetchInfo)
  }

  handleNewData (repo, payload) {
    if (payload.status === "waiting") this.mixItUp(repo)
    if (payload.status === "done")    this.waitThenMixItUp(repo)
  }

  mixItUp (repo) {
    clearInterval(this.mixInterval);

    this.mixInterval = setInterval(function() {
      repo.push(mixItUp)
    }, 3000)
  }

  waitThenMixItUp (repo, delay) {
    setTimeout(function() {
      repo.push(wait)
      this.mixItUp(repo)
    }.bind(this), 10000)
  }

  register () {
    return {
      [fetchInfo]:  this.handleNewData,
      [updateInfo]: this.handleNewData
    }
  }
}

export default WaitScreen
