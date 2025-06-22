import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { checkPasswordStrength } from "@/utils/PasswordStrengthChecker";
import { registerUser } from "../services/authService";
import { signupStyles as styles } from "@/styles/signupStyles";

export default function SignUpScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const strength = checkPasswordStrength(password);
  const passwordsMatch = password === confirmPassword;

  const handleSignUp = async () => {
    if (!email || !password || !firstName || !lastName) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!passwordsMatch) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      await registerUser(email, password);
      Alert.alert("Success", "Account created successfully!");
      router.push("/tabs/home");
    } catch (error: any) {
      Alert.alert("Registration Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.signup}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.signup__backButton}
          onPress={() => router.push("/")}
        >
          <Ionicons name="arrow-back" size={24} color="#4E148C" />
        </TouchableOpacity>

        <Text style={styles.signup__title}>Create An Account</Text>
        <Text style={styles.signup__subtitle}>Sign up to get started</Text>

        <ScrollView
          style={styles.signup__inputScrollContainer}
          contentContainerStyle={{ paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* First Name Input */}
          <View style={styles.signup__inputContainer}>
            <Icon
              name="user"
              size={20}
              color="#888"
              style={styles.signup__icon}
            />
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              placeholderTextColor="#888"
              style={styles.signup__inputWithIcon}
            />
          </View>

          {/* Last Name Input */}
          <View style={styles.signup__inputContainer}>
            <Icon
              name="user"
              size={20}
              color="#888"
              style={styles.signup__icon}
            />
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor="#888"
              style={styles.signup__inputWithIcon}
            />
          </View>

          {/* Email Input */}
          <View style={styles.signup__inputContainer}>
            <Icon
              name="envelope"
              size={20}
              color="#888"
              style={styles.signup__icon}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.signup__inputWithIcon}
            />
          </View>

          {/* Password Input */}
          <View style={styles.signup__inputContainer}>
            <Icon
              name="lock"
              size={20}
              color="#888"
              style={styles.signup__icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={styles.signup__inputWithIcon}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Password Strength Text */}
          {password.length > 0 && (
            <Text
              style={[
                styles.signup__passwordStrength,
                strength === "Weak"
                  ? { color: "red" }
                  : strength === "Medium"
                  ? { color: "orange" }
                  : { color: "green" },
              ]}
            >
              Password Strength: {strength}
            </Text>
          )}

          {/* Confirm Password Input */}
          <View style={styles.signup__inputContainer}>
            <Icon
              name="lock"
              size={20}
              color="#888"
              style={styles.signup__icon}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={styles.signup__inputWithIcon}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          {/* Password Match Validation */}
          {confirmPassword.length > 0 && !passwordsMatch && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              Passwords do not match
            </Text>
          )}
        </ScrollView>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.signup__signupBtn, loading && { opacity: 0.7 }]}
          onPress={handleSignUp}
          disabled={loading}
        >
          <Text style={styles.signup__signupText}>
            {loading ? "Creating Account..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

        {/* Log In Switch */}
        <View style={styles.signup__logInContainer}>
          <Text style={styles.signup__accountText}>
            Already have an Account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.signup__switchToLogIn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
