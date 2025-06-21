import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Recall Scanner</Text>
        <Text style={styles.subtitle}>
          Keep your family safe from recalled products
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.featureCard}>
          <Ionicons name="scan-outline" size={60} color="#4E148C" />
          <Text style={styles.featureTitle}>Scan Receipts</Text>
          <Text style={styles.featureDescription}>
            Take a photo of your receipt to check for recalled items
          </Text>
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => router.push("/tabs/scanner")}
          >
            <Text style={styles.featureButtonText}>Start Scanning</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Receipts Scanned</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Alerts Found</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 30,
    backgroundColor: "#f8f9fa",
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
  },
  content: {
    flex: 1,
    padding: 24,
  },
  featureCard: {
    backgroundColor: "#f8f9fa",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 16,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  featureButton: {
    backgroundColor: "#4E148C",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  featureButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    backgroundColor: "#f8f9fa",
    flex: 1,
    marginHorizontal: 8,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4E148C",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6B6B",
    margin: 24,
    padding: 15,
    borderRadius: 12,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
