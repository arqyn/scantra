import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
} from "./variables";

export const welcomePageStyles = StyleSheet.create({
  welcomePage: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    padding: spacing.xxl,
  },
  welcomePage__header: {
    alignItems: "center",
    marginBottom: spacing.xxxxl,
  },
  welcomePage__title: {
    fontSize: fontSizes.xxxlarge,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  welcomePage__subtitle: {
    fontSize: fontSizes.medium,
    color: colors.secondary,
    textAlign: "center",
  },
  welcomePage__buttonContainer: {
    gap: spacing.lg,
  },
  button__primary: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: borderRadius.large,
    alignItems: "center",
  },
  button__primaryText: {
    color: colors.white,
    fontSize: fontSizes.large,
    fontWeight: fontWeights.semibold,
  },
  button__secondary: {
    backgroundColor: "transparent",
    padding: spacing.lg,
    borderRadius: borderRadius.large,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  button__secondaryText: {
    color: colors.primary,
    fontSize: fontSizes.large,
    fontWeight: fontWeights.semibold,
  },
});
