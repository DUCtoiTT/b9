import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ placeholder, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}  // ✅ Thêm hàm này để cập nhật state
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

export default CustomTextInput;
