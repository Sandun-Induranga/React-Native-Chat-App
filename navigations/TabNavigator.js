import Chats from "../screens/Chats";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const [isChat, setIsChat] = useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarItemStyle: { backgroundColor: "#00a5e0" },
        tabBarContentContainerStyle: { backgroundColor: "#00a5e0" },
        tabBarLabelStyle: { color: "white", focus: "red" },
      }}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
