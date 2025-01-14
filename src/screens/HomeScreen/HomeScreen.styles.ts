import { StyleSheet } from "react-native";

import { COLORS, WINDOW_HEIGHT, WINDOW_WIDTH } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  wordContainer: {
    flex: 1,
    padding: 20,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  word: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 10,
  },
  pronunciation: {
    fontSize: 20,
    fontStyle: "italic",
    color: COLORS.lightGray,
    marginBottom: 20,
  },
  definition: {
    fontSize: 18,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 20,
  },
  example: {
    fontSize: 16,
    color: COLORS.lightGray,
    fontStyle: "italic",
    textAlign: "center",
  },
  bottomTextWrapper: {
    position: "absolute",
    bottom: 20,
    left: WINDOW_WIDTH * 0.1,
    width: WINDOW_WIDTH * 0.8,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  listenButtonView: {
    marginVertical: 20,
  },
});
