import * as ImagePicker from "expo-image-picker";

// Aspect ratio suitable for receipts and documents
export const DOCUMENT_ASPECT_RATIO = [4, 3];

// High quality for OCR or detail-sensitive image processing
export const IMAGE_CAPTURE_QUALITY_HIGH = 1;

// Config for launching the camera for receipt/document photos
export const RECEIPT_CAMERA_OPTIONS = {
  allowsEditing: true,
  aspect: DOCUMENT_ASPECT_RATIO,
  quality: IMAGE_CAPTURE_QUALITY_HIGH,
};

// Config for launching the image library picker
export const RECEIPT_LIBRARY_OPTIONS = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: DOCUMENT_ASPECT_RATIO,
  quality: IMAGE_CAPTURE_QUALITY_HIGH,
};
