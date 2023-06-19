import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ChatContext = () => {
  return (
    <View>
      <Text>ChatContext</Text>
    </View>
  );
};

export default ChatContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "start",
  },
});
