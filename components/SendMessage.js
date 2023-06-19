import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SendMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003566",
    alignItems: "center",
    justifyContent: "start",
    width: "max-content",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
