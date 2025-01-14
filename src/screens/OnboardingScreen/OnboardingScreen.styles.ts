import { COLORS } from "@constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  layout: {
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 46,
    marginBottom: 20,
    fontFamily: "PlayFair",
    textAlign: "left",
    color: COLORS.white,
    lineHeight: 54,
    maxWidth: 234,
    width: "100%",
  },
  stepText: {
    fontSize: 20,
    lineHeight: 31.4,
    color: COLORS.white,
    textAlign: "left",
    marginBottom: 20,
  },
  ctaWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  cta: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  fullWidthCta: {
    width: "100%",
  },
  backButton: {
    width: "95%",
  },
  nextButton: {
    width: "95%",
  },
  ctaText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
