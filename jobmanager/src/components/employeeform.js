import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeClearForm } from '../actions/employeeactions.js';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  constructor(props){
    super(props)

  }

  componentWillUnmount(){
    this.props.employeeClearForm()
  }

  render() {
    console.log(this.state,'on the employeeForm!!!');
    // if (this.props.navigation.state.params.employees === undefined){
    //   let {name, phone, shift} = this.props
    // } else {
    //   let {name, phone, shift} = this.props.navigation.state.params.employees
    // }
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Employee Name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="Employee Phone Number"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  // console.log('this is the state fo the employeeForm', state.employeeForm);
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeClearForm })(EmployeeForm);