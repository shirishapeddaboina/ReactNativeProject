import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen A</Text>
      <Button
        title='Open Drawer'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
}
function ScreenB() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Text>Screen B</Text>
    </View>
  );
}
function ScreenC() {
  return (
    <View style = {{flex : 1,justifyContent : "center",alignItems : "center"}}>
      <Text>Screen C</Text>
    </View>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='ScreenA'>
      <Drawer.Screen name='ScreenA' component={ScreenA} />
      <Drawer.Screen name='ScreenB' component={ScreenB} />
      <Drawer.Screen name='ScreenC' component={ScreenC} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});