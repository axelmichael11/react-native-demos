import React, {Component} from 'react'
import {View,Text, TouchableWithoutFeedback} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {CardSection} from '../common'


class ListItem extends Component{

  render(){
    const {titleStyle} =styles
    const {id, title}= this.props.library
    return (
      <TouchableWithoutFeedback
      onPress={()=>this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
            {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles={
  titleStyles:{
    fontSize: 18,
    paddingLeft: 15,
  }
}
export default connect(null, actions)(ListItem)
