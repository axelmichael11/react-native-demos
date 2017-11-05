import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {CardSection} from '../common'
import {editEmployee} from '../../actions/navigationactions.js'
import {connect} from 'react-redux'
import EmployeeCreate from '../employeecreate.js'

class ListItem extends Component{



  onRowPress(){
    const {name, phone, shift} = this.props.employees
    // const {navigate} = this.props.navigation
    navigate("Create", {},
  {
    type: "Navigate",
    routeName: "Create",
    params: {name:name, phone: phone, shift: shift}
  })
}
  render(){
    // const {navigate} = this.props.navigation
    const {name, phone, shift} = this.props.employees

    console.log(this.props.employees);

    return(
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}
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


export default connect(null, {editEmployee})(ListItem)
