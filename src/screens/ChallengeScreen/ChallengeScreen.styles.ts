import { StyleSheet } from "react-native";

import { COLORS } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  backButton: {
    width: 50,
    height: 50,
    padding: 20,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray,
  },
  modalHandle: {
    width: 40,
    height: 5,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: "center",
    backgroundColor: COLORS.gray,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: COLORS.white,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: COLORS.lightGray,
  },
  word: {
    fontWeight: "bold",
    color: COLORS.sunset,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.darkGray,
    borderRadius: 10,
    width: "100%",
    padding: 15,
    marginBottom: 20,
    color: COLORS.white,
    fontSize: 16,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: COLORS.sunset,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  feedback: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  successFeedback: {
    color: COLORS.success,
  },
  errorFeedback: {
    color: COLORS.error,
  },
  loadingText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
