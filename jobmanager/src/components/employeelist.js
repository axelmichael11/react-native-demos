import React, {Component} from 'react'
import {ListView} from 'react-native'
import {connect} from 'react-redux'
import ListItem from './ListItem/index.js'
import {employeeFetch} from '../actions/employeeactions.js'
import _ from 'lodash'
class EmployeeList extends Component {

  componentWillMount(){
    this.props.employeeFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }

  createDataSource({employees}){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employees){
    return <ListItem employees={employees}/>
  }

  render() {
    return(
      <ListView
      enableEmptySections={true}
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}
  })
  return {employees}
}


export default connect(mapStateToProps, {employeeFetch})(EmployeeList)
