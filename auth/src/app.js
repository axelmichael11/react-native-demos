import React, {Component} from 'react'
import firebase from 'firebase'
import {View} from 'react-native'
import LoginForm from './components/loginForm'

import {Header, Button, Spinner} from './components/common'
class App extends Component {
  state= {
    loggedIn:null,
  }

  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyBmrk9ONPE_-g710PbF3tiMitPLF5cdMrM",
    authDomain: "authentication-668d0.firebaseapp.com",
    databaseURL: "https://authentication-668d0.firebaseio.com",
    projectId: "authentication-668d0",
    storageBucket: "authentication-668d0.appspot.com",
    messagingSenderId: "404031169350"
  })

  firebase.auth().onAuthStateChanged((user)=>{
    if (user){
      this.setState({loggedIn:true})
    } else {
      this.setState({loggedIn:false})
    }
  })
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <Button onPress={()=>firebase.auth().signOut()}>
          Log Out
          </Button>
        )
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size='large'/>;
    }
  }

  render() {

    return(
      <View>
      <Header headerText="Authentication"/>
      {this.renderContent()}
      </View>
    )
  }
}

export default App
