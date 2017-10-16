import React, {Component} from 'react'
import {
  View,
  Text,
 TouchableWithoutFeedback,
 LayoutAnimation,
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {CardSection} from '../common'


class ListItem extends Component{
  componentWillUpdate(){
    LayoutAnimation.spring()
  }
  renderDescription(){
    const {expanded, library} = this.props

    if (expanded){
      return (
        <CardSection>
        <Text style={{flex:1}}>{library.description}</Text>
        </CardSection>
      )
    }
  }

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
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded= state.selectedLibraryId === ownProps.library.id
  return {expanded}
}
export default connect(mapStateToProps, actions)(ListItem)
