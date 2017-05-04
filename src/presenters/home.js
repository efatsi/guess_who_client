import React     from 'react'
import Presenter from 'microcosm/addons/presenter'
import Chrome    from '../views/chrome'
import PeopleBox from '../views/peopleBox'

class Home extends Presenter {
  getModel () {
    return {
      people:   state => state.info.people.people,
      columns:  state => state.info.people.columns,
      rows:     state => state.info.people.rows,
      status:   state => state.info.status,
      mixCount: state => state.info.mixCount
    }
  }

  render () {
    let { people, status, columns, rows, mixCount } = this.model

    return (
      <div>
        <PeopleBox people={people} status={status} columns={columns} rows={rows} mixCount={mixCount}/>
        <Chrome status={status} />
      </div>
    )
  }
}

export default Home
