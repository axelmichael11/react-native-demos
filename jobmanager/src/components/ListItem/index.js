import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, Button, View} from 'react-native'
import Swipeout from 'react-native-swipeout';

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



  rowDelete(employees){
    // this.props.employeeDelete()
  }

  render(){
    // console.log('this.props ON LIST ITEM', this.props);
    const {employees} = this.props
    const {name, phone, shift} = this.props.employees

    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.deleteNote(employees) }
    }];

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
