import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
} from "./variables";

export const homeStyles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.white,
  },
  home__header: {
    paddingTop: spacing.xxxxl,
    paddingHorizontal: spacing.xxl,
    paddingBottom: spacing.xxxl,
    backgroundColor: colors.backgroundColor,
  },
  home__title: {
    fontSize: fontSizes.xxlarge,
    fontWeight: fontWeights.bold,
    textAlign: "center",
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  home__subtitle: {
    fontSize: fontSizes.medium,
    textAlign: "center",
    color: colors.secondary,
  },
  home__content: {
    flex: 1,
    padding: spacing.xxl,
  },
  home__featureCard: {
    backgroundColor: colors.backgroundColor,
    padding: spacing.xxl,
    borderRadius: borderRadius.xxlarge,
    alignItems: "center",
    marginBottom: spacing.xxl,
  },
  home__featureTitle: {
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.bold,
    color: "#333",
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  home__featureDescription: {
    fontSize: fontSizes.medium,
    color: colors.secondary,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  home__featureButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.large,
  },
  home__featureButtonText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semibold,
  },
  home__statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  home__statCard: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    marginHorizontal: spacing.sm,
    padding: spacing.xl,
    borderRadius: borderRadius.large,
    alignItems: "center",
  },
  home__statNumber: {
    fontSize: fontSizes.xxxlarge,
    fontWeight: fontWeights.bold,
    color: colors.primary,
  },
  home__statLabel: {
    fontSize: fontSizes.regular,
    color: colors.secondary,
    marginTop: spacing.xs,
  },
  home__logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.error,
    margin: spacing.xxl,
    padding: spacing.lg,
    borderRadius: borderRadius.large,
  },
  home__logoutText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semibold,
    marginLeft: spacing.sm,
  },
});
