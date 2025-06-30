import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { welcomePageStyles as styles } from "@/styles/welcomePage";

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
