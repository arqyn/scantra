import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { loginUser } from "../services/authService";
import { loginStyles as styles } from "@/styles/loginStyles";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await loginUser(email, password);
      Alert.alert("Success", "Logged in successfully!");
      router.push("/tabs/home");
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.login}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.login__backButton}
        onPress={() => router.push("/")}
      >
        <Ionicons name="arrow-back" size={24} color="#4E148C" />
      </TouchableOpacity>

      <Text style={styles.login__title}>Welcome Back</Text>
      <Text style={styles.login__subtitle}>Log in to continue</Text>

      {/* Email Input with Icon */}
      <View style={styles.login__inputContainer}>
        <Icon
          name="envelope"
          size={18}
          color="#888"
          style={styles.login__icon}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.login__inputWithIcon}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input with Icon */}
      <View style={styles.login__inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.login__icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.login__inputWithIcon}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text style={styles.login__forgot}>Forgot Password?</Text>

      <TouchableOpacity
        style={[styles.login__loginBtn, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.login__loginText}>
          {loading ? "Logging in..." : "Log In"}
        </Text>
      </TouchableOpacity>

      <View style={styles.login__signUpContainer}>
        <Text style={styles.login__accountText}>Don't have an Account? </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.login__switchToSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
