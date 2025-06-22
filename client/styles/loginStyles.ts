import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
} from "./variables";

export const loginStyles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.xxl,
    backgroundColor: colors.white,
  },
  login__backButton: {
    position: "absolute",
    top: 50,
    left: spacing.xl,
    padding: spacing.md,
    zIndex: 1,
  },
  login__title: {
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.bold,
    textAlign: "center",
  },
  login__subtitle: {
    fontSize: fontSizes.regular,
    textAlign: "center",
    padding: 13,
    color: colors.gray,
  },
  login__inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: borderRadius.small,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  login__icon: {
    marginRight: spacing.sm,
  },
  login__inputWithIcon: {
    flex: 1,
    paddingVertical: spacing.md,
  },
  login__forgot: {
    textAlign: "right",
    color: colors.gray,
    marginBottom: spacing.xl,
    fontWeight: fontWeights.medium,
  },
  login__loginBtn: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: borderRadius.xlarge,
    alignItems: "center",
  },
  login__loginText: {
    color: colors.white,
    fontWeight: fontWeights.bold,
  },
  login__signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },
  login__accountText: {
    color: colors.gray,
  },
  login__switchToSignUp: {
    color: colors.primary,
    fontWeight: fontWeights.bold,
  },
});
