import React     from 'react'
import Presenter from 'microcosm/addons/presenter'
import Chrome    from '../views/chrome'
import PeopleBox from '../views/peopleBox'

class Home extends Presenter {
  getModel () {
    return {
      people: state => state.info.people.people,
      status: state => state.info.status
    }
  }

  render () {
    let { people, status } = this.model

    return (
      <div>
        <Chrome status={status} />
        <PeopleBox people={people} status={status}/>
      </div>
    )
  }
}

export default Home
