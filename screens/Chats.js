import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text>Chats</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "start",
  },
});
