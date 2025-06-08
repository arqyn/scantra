import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/scan-image.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Welcome to <Text style={styles.brand}>Recall Scanner</Text>
      </Text>
      <Text style={styles.subtitle}>Your Smart Product Recall Assistant</Text>

      <TouchableOpacity
        style={styles.accountButton}
        onPress={() => router.push("/login" as any)}
      >
        <Text style={styles.accountText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.accountButton}
        onPress={() => router.push("/signup" as any)}
      >
        <Text style={styles.accountText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  brand: {
    color: "#4E148C",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  accountButton: {
    backgroundColor: "#4E148C",
    paddingVertical: 14,
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    margin: 8,
  },
  accountText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
