import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import avatar from "../assets/avatar.jpg";
import { useNavigation } from "@react-navigation/native";
import ChatContext from "../components/ChatContext";

const User = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ width: "100%", flex: 1 }}
      onPress={() => navigation.navigate()}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Image source={avatar} style={styles.avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.text}>Really, Thats great</Text>
          </View>
        </View>
        <Text style={styles.time}>4:25 pm</Text>
      </View>
    </TouchableOpacity>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 10,
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
  text: {
    fontSize: 16,
    color: "grey",
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: "grey",
  },
});
