import React, {Component} from 'react'
import {View, Text, Picker} from 'react-native'
import {connect} from 'react-redux'
import {Card, CardSection, Input, Button} from './common'
import EmployeeForm from './employeeform.js'

import {employeeUpdate, employeeCreate} from '../actions/employeeactions.js'

class EmployeeCreate extends Component{


  onButtonPress(){
    const {name, phone, shift} = this.props
    this.props.employeeCreate({name, phone, shift:shift || 'Monday'})
  }

  render(){
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate)
