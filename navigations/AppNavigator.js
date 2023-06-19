import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabNavigator from "./TabNavigator";
import ChatContext from "../components/ChatContext";
import { TabBarItem } from "react-native-tab-view";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="YouChat" component={TabNavigator} />
      <Stack.Screen name="ChatContext" component={ChatContext} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
