import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SendMessage from "./SendMessage";

const ChatContext = () => {
  return (
    <View>
      <SendMessage text="This is a message" />
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
