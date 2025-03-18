import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const IconButton = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    marginBottom: 10,
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default IconButton;
