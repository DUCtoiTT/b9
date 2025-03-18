import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = () => {
    // Xử lý đăng xuất (có thể xóa token, chuyển về màn hình đăng nhập, v.v.)
    navigation.replace("SignIn"); // Chuyển về màn hình đăng nhập
  };

  return (
    <View style={styles.container}>
      {/* Phần Header chứa Avatar */}
      <View style={styles.header}>
        {/* <Image source={require("../assets/avatar.png")} style={styles.avatar} /> */}
        <Text style={styles.username}>Nguyễn Văn A</Text>
      </View>

      {/* Phần thông tin + Nút Sign Out */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: nguyenvana@example.com</Text>
        <Text style={styles.infoText}>Số điện thoại: 0123 456 789</Text>
        <Button title="Sign Out" onPress={handleSignOut} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  username: { fontSize: 22, fontWeight: "bold" },
  infoContainer: { width: "80%", alignItems: "center" },
  infoText: { fontSize: 16, marginBottom: 5 },
});

export default ProfileScreen;
