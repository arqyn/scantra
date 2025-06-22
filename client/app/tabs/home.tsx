import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { homeStyles as styles } from "@/styles/homeStyles";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.home}>
      <View style={styles.home__header}>
        <Text style={styles.home__title}>Welcome to Recall Scanner</Text>
        <Text style={styles.home__subtitle}>
          Keep your family safe from recalled products
        </Text>
      </View>

      <View style={styles.home__content}>
        <View style={styles.home__featureCard}>
          <Ionicons name="scan-outline" size={60} color="#4E148C" />
          <Text style={styles.home__featureTitle}>Scan Receipts</Text>
          <Text style={styles.home__featureDescription}>
            Take a photo of your receipt to check for recalled items
          </Text>
          <TouchableOpacity
            style={styles.home__featureButton}
            onPress={() => router.push("/tabs/scanner")}
          >
            <Text style={styles.home__featureButtonText}>Start Scanning</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.home__statsContainer}>
          <View style={styles.home__statCard}>
            <Text style={styles.home__statNumber}>0</Text>
            <Text style={styles.home__statLabel}>Receipts Scanned</Text>
          </View>
          <View style={styles.home__statCard}>
            <Text style={styles.home__statNumber}>0</Text>
            <Text style={styles.home__statLabel}>Alerts Found</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
