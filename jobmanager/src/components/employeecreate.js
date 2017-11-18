import React, {Component} from 'react'
import {View, Text, Picker} from 'react-native'
import Communications from 'react-native-communications'
import {connect} from 'react-redux'
import {Card, CardSection, Input, Button, renderIf, ConfirmDelete} from './common'
import EmployeeForm from './employeeform.js'
import {employeeUpdate, employeeCreate, employeeSave, employeeDelete} from '../actions/employeeactions.js'

class EmployeeCreate extends Component{
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }


  onButtonPress(){
    console.log('this. props on create', this.props);
    if (this.props.navigation.state.params){
      let {name, phone, shift} = this.props
      let {uid} = this.props.navigation.state.params.employees
      console.log('the params object exists information should be updating...', name, phone, shift);
      this.props.employeeSave({uid, name, phone, shift:shift || 'Monday'})
    } else {
      console.log('the params object DOES NOT EXIST, executing employeeCreate!');
      let {name, phone, shift} = this.props
      this.props.employeeCreate({name, phone, shift:shift || 'Monday'})
    }
  }

  onTextPress() {
    const {name, phone, shift} = this.props
    Communications.text(phone, `Hello ! you have a shift coming up on ${shift}`)
  }

  onDecline(){
    this.setState({showModal:false})
  }

  onAccept(){
    let {uid} = this.props.navigation.state.params.employees
    console.log('this si the UID on Accept!', uid);
    this.props.employeeDelete({uid})
    this.setState({showModal:false})
  }

  render(){
    let buttonText;
    let TextMessage = (props) => {
      return (
        <View>
        <CardSection>
          <Button onPress={()=>{this.onTextPress.bind(this)}}>
          Send Reminder text
          </Button>
        </CardSection>
        </View>
      )
    }


    if (this.props.navigation.state.params) {
      buttonText = 'Save Changes'
    } else {
      buttonText = 'Create New Employee'
      textMessage = null;
    }
    console.log('this is the text message thing...',TextMessage);

    return(
      <Card>

        <CardSection>
          <Button style={{color:'green'}}
          onPress={this.onButtonPress.bind(this)}
          >
          {buttonText}
          </Button>
        </CardSection>
      {renderIf(this.props.navigation.state.params , <TextMessage/> )}
      {renderIf(this.props.navigation.state.params ,
        <CardSection>
        <Button
        style={styles.fireButtonStyle}
        onPress={()=>{this.setState({showModal:!this.state.showModal})}}>
        Fire Employee
        </Button>
        </CardSection>
      )}

      <ConfirmDelete
      visible={this.state.showModal}
      onAccept={this.onAccept.bind(this)}
      onDecline={this.onDecline.bind(this)}
      >
      Are you Sure you want to delete this employee?
      </ConfirmDelete>

      <EmployeeForm {...this.props}/>
      </Card>
    )
  }
}

const styles= {
  pickerTextStyle: {
    fontSize: 25,
    paddingLeft:20,
  },
  fireButtonStyle: {
    color:'#ff0000'
  }
}
mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm
  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeCreate, employeeSave, employeeDelete})(EmployeeCreate)
