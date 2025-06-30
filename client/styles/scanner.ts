import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
} from "./variables";

export const scannerStyles = StyleSheet.create({
  scanner: {
    flex: 1,
    padding: spacing.xl,
    backgroundColor: colors.white,
  },
  scanner__title: {
    fontSize: fontSizes.xxlarge,
    fontWeight: fontWeights.bold,
    textAlign: "center",
    marginBottom: spacing.sm,
    color: colors.primary,
  },
  scanner__subtitle: {
    fontSize: fontSizes.medium,
    textAlign: "center",
    color: colors.secondary,
    marginBottom: spacing.xxxl,
  },
  scanner__imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  scanner__receiptImage: {
    width: 250,
    height: 300,
    borderRadius: borderRadius.large,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  scanner__removeButton: {
    position: "absolute",
    top: -10,
    right: 50,
  },
  scanner__uploadArea: {
    height: 250,
    borderWidth: 2,
    borderColor: "#ddd",
    borderStyle: "dashed",
    borderRadius: borderRadius.large,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  scanner__uploadText: {
    marginTop: spacing.md,
    fontSize: fontSizes.medium,
    color: colors.lightGray,
  },
  scanner__buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: spacing.xl,
  },
  scanner__actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    minWidth: 140,
    justifyContent: "center",
  },
  scanner__buttonText: {
    color: colors.white,
    fontWeight: fontWeights.semibold,
    marginLeft: spacing.sm,
  },
  scanner__processButton: {
    backgroundColor: colors.success,
    padding: spacing.lg,
    borderRadius: borderRadius.large,
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  scanner__processingButton: {
    backgroundColor: colors.processing,
  },
  scanner__processButtonText: {
    color: colors.white,
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold,
  },
  scanner__infoContainer: {
    backgroundColor: colors.backgroundColor,
    padding: spacing.lg,
    borderRadius: borderRadius.medium,
    marginTop: "auto",
  },
  scanner__infoTitle: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
    marginBottom: spacing.sm,
    color: "#333",
  },
  scanner__infoText: {
    fontSize: fontSizes.regular,
    color: "#555",
    marginBottom: spacing.xs,
  },
});
