import { StyleSheet } from "react-native";

import { COLORS } from "@constants";

export const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    shadowRadius: 4,
    borderRadius: 50,
    shadowOpacity: 0.3,
    shadowColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.sunset,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 24,
    color: COLORS.white,
  },
});
