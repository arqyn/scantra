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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { checkPasswordStrength } from "./PasswordStrengthChecker";

export default function SignUpScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const strength = checkPasswordStrength(password);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
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
              placeholderTextColor="#888"
              style={styles.inputWithIcon}
            />
          </View>

          {/* Last Name Input */}
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#888"
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
        />
      </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Email"
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
            />
          </View>


          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={styles.inputWithIcon}
            />
          </View>
        </ScrollView>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Sign Up</Text>
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
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 13,
    color: "#888",
  },
  inputScrollContainer: {
    flexGrow: 0,
    maxHeight: 500,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    height: 50,
  },
  icon: {
    marginRight: 6,
  },
  inputWithIcon: {
    flex: 1,
    height: 48,
    paddingVertical: 0,
    fontSize: 16,
  },

  passwordStrength: {
    marginBottom: 12,
    fontWeight: "bold",
  },


  signupBtn: {
    backgroundColor: "#4E148C",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
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
