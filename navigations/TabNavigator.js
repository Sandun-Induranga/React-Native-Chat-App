import Chats from "../screens/Chats";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
