import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SendMessage from "./SendMessage";
import ReceivedMessage from "./ReceiveMessage";

const ChatContext = () => {
  return (
    <View style={styles.container}>
      <SendMessage text="This is a message sdffsdfdsfdsfdsfsdfddddddddddddddd" />
      <ReceivedMessage text="This is a message" />
    </View>
  );
};

export default ChatContext;

const styles = StyleSheet.create({
  container: {
    display: "grid",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    width: "100%",
  },
});
