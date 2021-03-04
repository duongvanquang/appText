import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trangchu from './src/component/Trangchu';
import Login from './src/component/Login';
import Caidat from './src/component/Caidat';
import Profile from './src/component/Profile';
import Setting from './src/component/Setting';
import Thongbao from './src/component/Thongbao';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { navigationRef } from './RootNavigation';


const reducers = combineReducers({
  cart: require('./src/redux/cart').reducer,
})
const store = createStore(reducers);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const bell = require('./src/component/beell.png')
const home = require('./src/component/home.png')
const setting = require('./src/component/setting.png')


function TabApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let source;
          if (route.name === 'Trang chủ') {
            source = home
          } else if (route.name === 'Thông báo') {
            source = bell
          }
          else if (route.name === 'Cài đặt') {
            source = setting
          }
          return <Image
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
            source={source} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Trang chủ" component={Trangchu} />
      <Tab.Screen name="Thông báo" component={Thongbao} />
      <Tab.Screen name="Cài đặt" component={Caidat} />
    </Tab.Navigator>
  );
}
class StackApp extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tab" component={TabApp} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Payment" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App = () => (
  <Provider store={store}>
    <StackApp />
  </Provider >
);