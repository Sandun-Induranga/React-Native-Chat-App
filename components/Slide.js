import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import avatar from "../assets/avatar.jpg";
import status from "../assets/status.jpeg";
import { ScrollView } from "react-native";

const Slide = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <View style={styles.container}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.username}>Username</Text>
        </View>
        <Image
          source={status}
          style={{
            width: "90%",
            height: 300,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
