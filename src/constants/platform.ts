import { Dimensions, Platform } from "react-native";

export const IS_IOS = Platform.OS === "ios";

export const IS_ANDROID = Platform.OS === "android";

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");
