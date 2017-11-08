import React, {Component} from 'react'
import {Text, TouchableOpacity, Button} from 'react-native'
import {addEmployee} from '../../../actions/navigationactions.js'
import {connect } from 'react-redux'

class AddButton extends Component {

  buttonPress(){
    console.log('this.props on the button header',this.props);
    this.props.addEmployee()
  }
  render(){
    return (
      <Button title="Add Employee" onPress={this.buttonPress.bind(this)}>
      <Text>
      Add Employee
      </Text>
      </Button>
    )
  }
}

const AddEmployeeButton = connect(null, {addEmployee})(AddButton)

export {AddEmployeeButton}
