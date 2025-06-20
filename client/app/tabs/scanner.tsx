import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function ScannerScreen() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera roll permissions to scan receipts!"
      );
      return false;
    }
    return true;
  };

  const pickImageFromLibrary = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera permissions to take photos!"
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const processReceipt = async () => {
    if (!selectedImage) {
      Alert.alert("No Image", "Please select a receipt image first");
      return;
    }

    setIsProcessing(true);

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      Alert.alert(
        "Processing Complete",
        "Receipt scanned successfully! No recalls found for your items.",
        [
          {
            text: "OK",
            onPress: () => {
              // Navigate to results or reset
              setSelectedImage(null);
            },
          },
        ]
      );
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt Scanner</Text>
      <Text style={styles.subtitle}>
        Scan your receipts to check for recalled products
      </Text>

      {selectedImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.receiptImage} />
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close-circle" size={30} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.uploadArea}>
          <Ionicons name="receipt-outline" size={80} color="#ccc" />
          <Text style={styles.uploadText}>No receipt selected</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={takePhoto}>
          <Ionicons name="camera" size={24} color="#fff" />
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={pickImageFromLibrary}
        >
          <Ionicons name="images" size={24} color="#fff" />
          <Text style={styles.buttonText}>Choose from Library</Text>
        </TouchableOpacity>
      </View>

      {selectedImage && (
        <TouchableOpacity
          style={[
            styles.processButton,
            isProcessing && styles.processingButton,
          ]}
          onPress={processReceipt}
          disabled={isProcessing}
        >
          <Text style={styles.processButtonText}>
            {isProcessing ? "Processing..." : "Scan for Recalls"}
          </Text>
        </TouchableOpacity>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>How it works:</Text>
        <Text style={styles.infoText}>
          🟡 Company recall - Some recalls from this company
        </Text>
        <Text style={styles.infoText}>
          🟠 Related product - Similar products recalled
        </Text>
        <Text style={styles.infoText}>
          🔴 Exact match - This product is recalled!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#4E148C",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 20,
  },
  receiptImage: {
    width: 250,
    height: 300,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4E148C",
  },
  removeButton: {
    position: "absolute",
    top: -10,
    right: 50,
  },
  uploadArea: {
    height: 250,
    borderWidth: 2,
    borderColor: "#ddd",
    borderStyle: "dashed",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  uploadText: {
    marginTop: 10,
    fontSize: 16,
    color: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4E148C",
    padding: 12,
    borderRadius: 10,
    minWidth: 140,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
  },
  processButton: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  processingButton: {
    backgroundColor: "#6C757D",
  },
  processButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    backgroundColor: "#F8F9FA",
    padding: 15,
    borderRadius: 10,
    marginTop: "auto",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
});
