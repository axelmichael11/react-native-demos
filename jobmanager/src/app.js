import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import {APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID} from 'react-native-dotenv'
import LoginForm from './components/loginform.js'

class App extends Component {
  componentWillMount(){
    var config = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    databaseURL: DATABASEURL,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
  };
  firebase.initializeApp(config);
  }
  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    )
  }
}

export default App
