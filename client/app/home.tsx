import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    padding: 12,
    backgroundColor: "#4E148C",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
