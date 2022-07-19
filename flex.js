import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import logo from './assets/logo.jpg';

const App = () => {
  const num1 = 1;
  const num2 = 5;
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'powderblue' }}><Text>{num1}</Text></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}><Text>{num2}</Text></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'steelblue' }}><Image source={logo} style={{ width: 100, height: 100 }} /></View>

    </View>
  );

};
export default App