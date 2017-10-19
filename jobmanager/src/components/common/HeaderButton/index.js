import React from 'react'
import {Text, TouchableOpacity, Button} from 'react-native'
import {createEmployee} from '../../../actions/navigationactions.js'
import {connect } from 'react-redux'

const HeaderButton = ({onPress, children}) => {
  // const {buttonStyle, textStyle}= styles
  action(){
    if(children ==="Add Employee"){
      return this.props.createEmployee()
    } else {
      return this.props.
    }
  }
  return (
    <Button onPress={onPress}>
      <Text>
      {children}
      </Text>
    </Button>
  )
}



const mapDispatchToProps = dispatch => ({
})

export default connect(null, {createEmployee})(HeaderButton)


export {HeaderButton}
