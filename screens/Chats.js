import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import User from "../components/User";

const Chats = () => {
  return (
    <View style={styles.container}>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
