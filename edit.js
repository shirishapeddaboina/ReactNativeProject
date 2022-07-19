import React from 'react';
import { StyleSheet,View,  Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as RootNavigation from './RootNavigation';
export default function Edit() {
    
      return (
        <ScrollView>
        <View style={styles.container}>
        <Icon name="arrow-left" onPress={() =>RootNavigation.navigate('ManageUsers')} size={30} ></Icon>
          <Text>Welcome to dashboard</Text></View>
          </ScrollView>
          )
      }
    
      const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        padding: 20
    }
});