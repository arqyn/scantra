import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
} from "./variables";

export const signupStyles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.xxl,
    backgroundColor: colors.white,
  },
  signup__backButton: {
    position: "absolute",
    top: 50,
    left: spacing.xl,
    padding: spacing.md,
    zIndex: 1,
  },
  signup__title: {
    fontSize: fontSizes.xxlarge,
    fontWeight: fontWeights.bold,
    textAlign: "center",
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  signup__subtitle: {
    fontSize: fontSizes.medium,
    textAlign: "center",
    color: colors.secondary,
    marginBottom: spacing.xxl,
  },
  signup__inputScrollContainer: {
    maxHeight: 400,
  },
  signup__inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: borderRadius.small,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  signup__icon: {
    marginRight: spacing.sm,
  },
  signup__inputWithIcon: {
    flex: 1,
    paddingVertical: spacing.md,
  },
  signup__passwordStrength: {
    fontSize: fontSizes.regular,
    marginBottom: spacing.md,
    fontWeight: fontWeights.medium,
  },
  signup__signupBtn: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: borderRadius.xlarge,
    alignItems: "center",
    marginTop: spacing.xl,
  },
  signup__signupText: {
    color: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.medium,
  },
  signup__logInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },
  signup__accountText: {
    color: colors.gray,
  },
  signup__switchToLogIn: {
    color: colors.primary,
    fontWeight: fontWeights.bold,
  },
});
