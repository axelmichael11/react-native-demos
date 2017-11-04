import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {CardSection} from '../common'
import {addEmployee} from '../../actions/navigationactions.js'
import {connect} from 'react-redux'

class ListItem extends Component{



  onRowPress(name, phone, shift){
    this.props.addEmployee({employee: this.props.employees})
  }
  render(){
    // const {navigate} = this.props.navigation
    const {name, phone, shift} = this.props.employees

    console.log(this.props.employee);

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


export default connect(null, {addEmployee})(ListItem)
