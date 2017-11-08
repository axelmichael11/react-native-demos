import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {CardSection} from '../common'
import {editEmployee, addEmployee} from '../../actions/navigationactions.js'
import {employeeFormFill} from '../../actions/employeeactions.js'

import {connect} from 'react-redux'
import EmployeeCreate from '../employeecreate.js'

class ListItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      employee: this.props.employees
    }
  }


  onRowPress(employees){
    this.props.editEmployee(employees)
    this.props.employeeFormFill(employees)
  }

  render(){
    const {employees} = this.props
    const {name, phone, shift} = this.props.employees

    // console.log('this.props on listitem',this.props);

    return(
      <TouchableWithoutFeedback onPress={()=>{this.onRowPress(employees)}}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
            {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}


export default connect(null, {editEmployee, employeeFormFill})(ListItem)
