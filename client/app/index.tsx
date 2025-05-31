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
      <Text style={styles.accountText}>Already have an account?</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/login" as any)}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        or <Text style={styles.signupLink}>Sign Up</Text> with email
      </Text>
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
  accountText: {
    fontSize: 13,
    color: "#808080",
    textAlign: "center",
    marginBottom: 32,
  },
  loginButton: {
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
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 16,
    fontSize: 14,
    color: "#555",
  },
  signupLink: {
    color: "#000",
    fontWeight: "bold",
  },
});
