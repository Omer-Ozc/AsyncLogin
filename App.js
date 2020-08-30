import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/screen/LoginPage'
import SignUpPage from './src/screen/SignUpPage'
import Successfull from './src/screen/Successfull'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }




  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login Page" component={LoginPage} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="Successfull" component={Successfull} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
