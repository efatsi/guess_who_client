import React     from 'react'
import Presenter from 'microcosm/addons/presenter'
import Chrome    from '../views/chrome'
import PeopleBox from '../views/peopleBox'

class Home extends Presenter {
  getModel () {
    return {
      people:  state => state.info.people.people,
      columns: state => state.info.people.columns,
      rows:    state => state.info.people.rows,
      status:  state => state.info.status
    }
  }

  render () {
    let { people, status, columns, rows } = this.model

    return (
      <div>
        <Chrome status={status} />
        <PeopleBox people={people} status={status} columns={columns} rows={rows}/>
      </div>
    )
  }
}

export default Home
