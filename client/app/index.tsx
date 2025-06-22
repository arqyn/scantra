import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.welcomePage}>
      <View style={styles.welcomePage__header}>
        <Ionicons name="scan-circle-outline" size={120} color="#4E148C" />
        <Text style={styles.welcomePage__title}>Recall Scanner</Text>
        <Text style={styles.welcomePage__subtitle}>
          Protect your family from recalled products
        </Text>
      </View>

      <View style={styles.welcomePage__buttonContainer}>
        <TouchableOpacity
          style={styles.button__primary}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.button__primaryText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button__secondary}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.button__secondaryText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomePage: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  welcomePage__header: {
    alignItems: "center",
    marginBottom: 60,
  },
  welcomePage__title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4E148C",
    marginTop: 20,
    marginBottom: 8,
  },
  welcomePage__subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  welcomePage__buttonContainer: {
    gap: 16,
  },
  button__primary: {
    backgroundColor: "#4E148C",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  button__primaryText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  button__secondary: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4E148C",
  },
  button__secondaryText: {
    color: "#4E148C",
    fontSize: 18,
    fontWeight: "600",
  },
});
