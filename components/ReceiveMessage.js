import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ReceivedMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ReceivedMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abc4ff",
    alignItems: "center",
    justifyContent: "start",
    width: "max-content",
    maxwidth: "80%",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "#003566",
    fontSize: 16,
  },
});
