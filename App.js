/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './app/pages/login';
import Home from './app/pages/home';
import JobDetail from './app/pages/job-detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          options={{
            title: 'Job List',
            headerLeft: null,
            headerTitleAlign: 'center',
            headerStyle: {elevation: 0, shadowOpacity: 0},
          }}
          component={Home}
        />
        <Stack.Screen
          name="Detail"
          options={{title: 'Job Detail'}}
          component={JobDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
