// import React, { useState, useContext, createContext } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

// // Context để lưu trạng thái đăng nhập
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (email, password) => {
//     if (email === "admin@gmail.com" && password === "123456") {
//       setUser({ email });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Màn hình đăng nhập
// const LoginScreen = ({ navigation }) => {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (login(email, password)) {
//       // Không cần navigation.replace vì AppNavigator sẽ tự render lại
//     } else {
//       alert("Invalid Credentials");
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>
//       <Text style={styles.label}>Email ID</Text>
//       <TextInput placeholder="Enter your email here!" onChangeText={setEmail} style={styles.input} />
//       <Text style={styles.label}>Password</Text>
//       <TextInput placeholder="Enter your password here!" secureTextEntry onChangeText={setPassword} style={styles.input} />
//       <TouchableOpacity>
//         <Text style={styles.forgotPassword}>Forgot password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
//         <Text style={styles.signInButtonText}>Sign In</Text>
//       </TouchableOpacity>
//       <Text style={styles.orSignInWith}>Or sign in with</Text>
//       <View style={styles.socialButtons}>
//         <TouchableOpacity style={styles.googleButton}>
//           <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/281/281764.png" }} style={styles.icon} />
//           <Text> Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.facebookButton}>
//           <Text style={styles.facebookButtonText}>Facebook</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.signUpText}>Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text></Text>
//     </View>
//   );
// };

// // Màn hình khám phá (Explorer)
// const ExplorerScreen = () => (
//   <View style={styles.container}>
//     <Text style={styles.title}>Explorer</Text>
//   </View>
// );

// // Màn hình tài khoản (Account)
// const AccountScreen = () => {
//   const { logout } = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Account</Text>
//       <TouchableOpacity style={styles.signInButton} onPress={logout}>
//         <Text style={styles.signInButtonText}>Sign Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// // Tạo Stack Navigator
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Điều hướng giữa các tab (Explorer & Account)
// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Explorer" component={ExplorerScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// };

// // Điều hướng chính của ứng dụng
// const AppNavigator = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <NavigationContainer>
//       {user ? (
//         <MainTabNavigator />
//       ) : (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Login" component={LoginScreen} />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };


// // App chính
// const App = () => {
//   return (
//     <AuthProvider>
//       <AppNavigator />
//     </AuthProvider>
//   );
// };

// export default App;

// // CSS Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 30,
//     color: "#000",
//   },
//   label: {
//     alignSelf: "flex-start",
//     marginLeft: "10%",
//     marginBottom: 5,
//     fontWeight: "bold",
//   },
//   input: {
//     width: "80%",
//     padding: 10,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     backgroundColor: "#fff",
//   },
  // forgotPassword: {
  //   color: "#f39c12",
  //   alignSelf: "flex-end",
  //   marginRight: "-40%",
  //   marginBottom: 20,
  // },
  // signInButton: {
  //   backgroundColor: "#f39c12",
  //   padding: 15,
  //   borderRadius: 10,
  //   width: "80%",
  //   alignItems: "center",
  //   marginBottom: 20,
  // },
  // signInButtonText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
  // orSignInWith: {
  //   marginBottom: 20,
  // },
  // socialButtons: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "80%",
  //   marginBottom: 20,
  // },
  // googleButton: {
  //   backgroundColor: "#fff",
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   paddingHorizontal: 20,
  //   height: 50,
  //   width: 150,
  // },
  // facebookButton: {
  //   backgroundColor: "#3b5998",
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   paddingHorizontal: 20,
  //   height: 50,
  //   width: 150,
  // },
  // facebookButtonText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   fontSize: 16,
  // },
  // signUpText: {
  //   marginTop: 20,
  // },
  // signUpLink: {
  //   color: "#f39c12",
  //   fontWeight: "bold",
  // },
  // icon: {
  //   width: 20,
  //   height: 20,
  //   marginRight: 10,
  // },
// });
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { AuthProvider } from './src/context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Explorer" component={HomeScreen} />
    <Tab.Screen name="Account" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => (
  <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </AuthProvider>
);

export default App;

