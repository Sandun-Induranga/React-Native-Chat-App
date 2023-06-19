import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";
import ChatContext from "../components/ChatContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="YouChat" component={TabNavigator} />
      <Stack.Screen name="ChatContext" component={ChatContext} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
