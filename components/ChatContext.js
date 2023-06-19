import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SendMessage from "./SendMessage";
import ReceivedMessage from "./ReceiveMessage";

const ChatContext = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SendMessage text="This is a message sdffsdfdsfdsfdsfsdfddddddddddddddd" />
        <ReceivedMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
        <ReceivedMessage text="This is a message" />
        <SendMessage text="This is a message" />
      </View>
    </ScrollView>
  );
};

export default ChatContext;

const styles = StyleSheet.create({
  container: {
    display: "grid",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    padding: 10,
    gap: 10,
  },
});
