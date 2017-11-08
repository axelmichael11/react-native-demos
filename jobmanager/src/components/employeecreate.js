import React, {Component} from 'react'
import {View, Text, Picker} from 'react-native'
import {connect} from 'react-redux'
import {Card, CardSection, Input, Button} from './common'
import EmployeeForm from './employeeform.js'

import {employeeUpdate, employeeCreate, employeeSave} from '../actions/employeeactions.js'

class EmployeeCreate extends Component{

  onButtonPress(){
    console.log('this. props on create', this.props);
    if (this.props.navigation.state.params){
      console.log('the params object exists and is being logged', this.props.navigation.state.params.employees);

      this.props.employeeSave(this.props.navigation.state.params.employees)
    } else {
      console.log('the params object DOES NOT EXIST, executing employeeCreate!');
      let {name, phone, shift} = this.props
      this.props.employeeCreate({name, phone, shift:shift || 'Monday'})
    }
  }

  render(){
    console.log('this.props on employee create',this.props);
    return(
      <Card>
        <EmployeeForm {...this.props}/>

        <CardSection>
          <Button style={{color:'green'}}
          onPress={this.onButtonPress.bind(this)}
          >
          Create Employee
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles= {
  pickerTextStyle: {
    fontSize: 25,
    paddingLeft:20,
  }
}
mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm
  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeCreate, employeeSave})(EmployeeCreate)
