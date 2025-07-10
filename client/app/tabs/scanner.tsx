import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { scannerStyles as styles } from "@/styles/scanner";
import { RECEIPT_LIBRARY_OPTIONS } from "@/utils/ImagePickerOptions";
import { useStats } from "@/hooks/useStats";

export default function ScannerScreen() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { incrementReceiptsScanned, incrementAlertsFound } = useStats();

  const tryGetMediaLibraryPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const isGranted = status === "granted";

    if (!isGranted) {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera roll permissions to scan receipts!"
      );
    }

    return isGranted;
  };

  const pickImageFromLibrary = async () => {
    if (!(await tryGetMediaLibraryPermissions())) {
      return;
    }

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

  const tryGetCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera permissions to take photos!"
      );
      return false;
    }

    return true;
  };

  const takePhoto = async () => {
    const hasPermission = await tryGetCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync(RECEIPT_LIBRARY_OPTIONS);

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

    try {
      const formData = new FormData();
      formData.append("receipt", {
        uri: selectedImage,
        name: "receipt.jpg",
        type: "image/jpeg",
      } as any);

      const response = await fetch(
        "http://localhost:3000/api/scanner/recalls",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to scan the receipt.");
      }

      const data = await response.json();

      incrementReceiptsScanned(1);
      if (Array.isArray(data.alerts) && data.alerts.length > 0) {
        incrementAlertsFound(data.alerts.length);
      }

      Alert.alert("Scan Complete", data.summary || "No recalled items found.", [
        {
          text: "OK",
          onPress: () => {
            setSelectedImage(null);
          },
        },
      ]);
    } catch (error: any) {
      console.error("Error:", error);
      Alert.alert("Error", error.message || "Failed to scan the receipt.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.scanner}>
      <Text style={styles.scanner__title}>Receipt Scanner</Text>
      <Text style={styles.scanner__subtitle}>
        Scan your receipts to check for recalled products
      </Text>

      {selectedImage ? (
        <View style={styles.scanner__imageContainer}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.scanner__receiptImage}
          />
          <TouchableOpacity
            style={styles.scanner__removeButton}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close-circle" size={30} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.scanner__uploadArea}>
          <Ionicons name="receipt-outline" size={80} color="#ccc" />
          <Text style={styles.scanner__uploadText}>No receipt selected</Text>
        </View>
      )}

      <View style={styles.scanner__buttonContainer}>
        <TouchableOpacity
          style={styles.scanner__actionButton}
          onPress={takePhoto}
        >
          <Ionicons name="camera" size={24} color="#fff" />
          <Text style={styles.scanner__buttonText}>Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scanner__actionButton}
          onPress={pickImageFromLibrary}
        >
          <Ionicons name="images" size={24} color="#fff" />
          <Text style={styles.scanner__buttonText}>Choose from Library</Text>
        </TouchableOpacity>
      </View>

      {selectedImage && (
        <TouchableOpacity
          style={[
            styles.scanner__processButton,
            isProcessing && styles.scanner__processingButton,
          ]}
          onPress={processReceipt}
          disabled={isProcessing}
        >
          <Text style={styles.scanner__processButtonText}>
            {isProcessing ? "Processing..." : "Scan for Recalls"}
          </Text>
        </TouchableOpacity>
      )}

      <View style={styles.scanner__infoContainer}>
        <Text style={styles.scanner__infoTitle}>How it works:</Text>
        <Text style={styles.scanner__infoText}>
          🟡 Company recall - Some recalls from this company
        </Text>
        <Text style={styles.scanner__infoText}>
          🟠 Related product - Similar products recalled
        </Text>
        <Text style={styles.scanner__infoText}>
          🔴 Exact match - This product is recalled!
        </Text>
      </View>
    </View>
  );
}
