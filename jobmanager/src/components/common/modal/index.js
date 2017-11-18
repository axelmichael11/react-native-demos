import React from 'react'
import {Text, View, Modal} from 'react-native'
import {CardSection} from '../index.js'
import {Button} from '../index.js'


const ConfirmDelete = ({children, visible, onAccept, onDecline}) => {
  const {containerStyle, cardSectionStyle, textStyle} = style
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={()=>{}}
      transparent
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}> {children}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button onPress={onAccept}> Yes </Button>
          <Button onPress={onDecline}> No </Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const style = {
  cardSectionStyle: {
    justifyContent:'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',

  }
}

export {ConfirmDelete}
