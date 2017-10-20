import React from 'react'
import {Scene, Router, Stack} from 'react-native-router-flux'
import LoginForm from './components/loginform.js'
import EmployeeList from './components/employeelist.js'
import EmployeeCreate from './components/employeecreate.js'
import {Actions} from 'react-native-router-flux'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth">
          <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          />
        </Scene>
        <Scene key="main">
          <Scene
          onRight={()=>Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          renderBackButton={null}
          renderLeftButton={null}
          />
          <Scene
          key="createEmployee"
          component={EmployeeCreate}
          title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
