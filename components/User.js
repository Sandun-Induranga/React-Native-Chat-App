import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import avatar from "../assets/avatar.jpg";

const User = () => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Text>Username</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
