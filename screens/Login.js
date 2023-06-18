import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import TabNavigator from "../navigations/TabNavigator";
import AppNavigator from "../navigations/AppNavigator";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Login"
        onPress={() => navigation.navigate("AppNavigator")}
      />
      <Text onPress={() => navigation.navigate("AppNavigator")}>Login</Text>
    </View>
  );
};

export default Login;
