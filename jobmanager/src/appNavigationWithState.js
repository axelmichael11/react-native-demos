import React from 'react';
import {Button} from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoginForm from './components/loginform';
import EmployeeList from './components/employeelist';
import EmployeeCreate from './components/employeecreate';
import { NavigationActions } from 'react-navigation';
import {HeaderButton} from './components/common'

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: "Login",
    }
   },
  Employees: {
    screen: EmployeeList,
    navigationOptions: {
      title: "EmployeeList",
      headerLeft: null,
      headerRight: <Button title='Add Employee' onPress={() => this.navigate('Create')} />,
    }
   },
  Create: { screen: EmployeeCreate },
});

export const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
