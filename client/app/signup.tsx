import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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
      router.push("/tabs/home" as any);
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
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/" as any)}
        >
          <Ionicons name="arrow-back" size={24} color="#4E148C" />
        </TouchableOpacity>

        <Text style={styles.title}>Create An Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        <ScrollView
          style={styles.inputScrollContainer}
          contentContainerStyle={{ paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* First Name Input */}
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              placeholderTextColor="#888"
              style={styles.inputWithIcon}
            />
          </View>

          {/* Last Name Input */}
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor="#888"
              style={styles.inputWithIcon}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.inputWithIcon}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={styles.inputWithIcon}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Password Strength Text */}
          {password.length > 0 && (
            <Text
              style={[
                styles.passwordStrength,
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
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={styles.inputWithIcon}
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
          style={[styles.signupBtn, loading && { opacity: 0.7 }]}
          onPress={handleSignUp}
          disabled={loading}
        >
          <Text style={styles.signupText}>
            {loading ? "Creating Account..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

        {/* Log In Switch */}
        <View style={styles.logInContainer}>
          <Text style={styles.accountText}>Already have an Account? </Text>
          <TouchableOpacity onPress={() => router.push("/login" as any)}>
            <Text style={styles.switchToLogIn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4E148C",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
  },
  inputScrollContainer: {
    maxHeight: 400,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: 12,
  },
  passwordStrength: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "500",
  },
  signupBtn: {
    backgroundColor: "#4E148C",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  logInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  accountText: {
    color: "#808080",
  },
  switchToLogIn: {
    color: "#4E148C",
    fontWeight: "bold",
  },
});
