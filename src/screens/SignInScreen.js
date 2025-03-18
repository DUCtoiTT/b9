import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";


const SignInScreen = () => {
    const { login } = useAuth(); // Lấy hàm login từ Context
    const navigation = useNavigation();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Nhập vào:", email, password); // Kiểm tra dữ liệu nhập vào
        if (email.trim() === "" || password.trim() === "") {
            alert("Vui lòng nhập email và mật khẩu!");
            return;
        }
    
        const success = login(email, password);
        if (success) {
            console.log("Đăng nhập thành công!");
            navigation.replace("Main"); // Chuyển đến màn hình chính
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    };
    
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <CustomTextInput placeholder="Enter your email here!" onChangeText={setEmail} value={email}  />
      <CustomTextInput placeholder="Enter your password here!" secureTextEntry onChangeText={setPassword} value={password}  />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orSignInWith}>Or sign in with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/281/281764.png" }} style={styles.icon} />
          <Text> Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  forgotPassword: {
    color: "#f39c12",
    alignSelf: "flex-end",
    marginRight: "-40%",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#f39c12",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orSignInWith: {
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 50,
    width: 150,
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 50,
    width: 150,
  },
  facebookButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  signUpText: {
    marginTop: 20,
  },
  signUpLink: {
    color: "#f39c12",
    fontWeight: "bold",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default SignInScreen;
